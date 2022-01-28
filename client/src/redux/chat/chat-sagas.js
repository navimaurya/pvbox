import { takeLatest, call, put, all, takeEvery, delay } from "@redux-saga/core/effects";
import axios from "axios";

// import store from '../store';
// const state = store.getState;
// console.log(store);

import { checkChatList } from "./chat-action";

import chatActionType from "./chat-action-type";
import {
    chatFetchSuccess, chatFetchFailure,
    chatListFetchSuccess, chatListFetchFailure,
    chatSendSuccess, chatSendFailure,
    addNewMessagesSuccess

} from "./chat-action";

// Server connection funtions

export function* chatFetchStart({ payload }) {
    try {
        const { data } = yield axios.post('/api/receive', { friend: payload })
        if (data.status === 'success') {
            yield console.log(data);
            const chats = Object();
            chats[data.friend] = data.data
            yield put(chatFetchSuccess(chats));
        }
    } catch (error) {
        yield put(chatFetchFailure(error));
    }
}

export function* chaListFetchStart() {
    try {
        const { data } = yield axios.get('/api/chatlist')
        if (data.status === 'success') {
            yield put(chatListFetchSuccess(data.data));
        }
    } catch (error) {
        yield put(chatListFetchFailure(error));
    }
}

// Send Chat
export function* chatSendStartfuntion({ payload }) {
    console.log(payload);
    const { receiver, message } = payload;
    try {
        const { data } = yield axios.post('/api/send', {
            ...payload
        });
        if (data.status === 'success') {
            yield put(checkChatList(payload))
        }
    } catch (error) {
        yield put(chatSendFailure(error))
    }
}


export function* pullNewMessages() {
    try {
        while (true) {
            const res = yield axios.get('/api/new');
            // yield console.log(res.data.data);
            if (res.data.data.length) {
                yield put(addNewMessagesSuccess(res.data.data));
            }
            yield delay(1000);
        }

    } catch (error) {
        // timeIntervel = timeIntervel + 1000
    }
}

// Action funtion
export function* onChatFetchStart() {
    yield takeLatest(chatActionType.CHAT_FETCH_START, chatFetchStart)
}

export function* onChatListFetchStart() {
    yield takeLatest(chatActionType.CHAT_LIST_FETCH_START, chaListFetchStart)
}

export function* onChatSendStart() {
    yield takeEvery(chatActionType.CHAT_SEND_START, chatSendStartfuntion)
}

export function* onAddMessageStarter() {
    yield takeLatest(chatActionType.ADD_NEW_MESSAGES_START, pullNewMessages)
}
// Export friend Sagas
export function* chatSagas() {
    yield all([
        call(onChatSendStart),
        call(onChatFetchStart),
        call(onChatListFetchStart),
        call(onAddMessageStarter)
    ])
}




