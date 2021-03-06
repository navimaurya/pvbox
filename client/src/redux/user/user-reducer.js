import userAction from './user-action-type'
const INITIAL_STAT = {
    currentUser: null,
    error: null
}

const userReducer = (state = INITIAL_STAT, action) => {
    switch (action.type) {
        case userAction.SIGN_IN_SUCCESS:
        case userAction.GOOGLE_SIGN_IN_SUCCESS:
        case userAction.EMAIL_SIGN_IN_SUCCESS:
        case userAction.USER_ID_SIGN_IN_SUCCESS:
        case userAction.SIGN_UP_SUCCESS:
        case userAction.GET_LOGGEDIN_USER_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                error: null
            }
        case userAction.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                error: null
            }
        case userAction.SIGN_OUT_FAILURE:
        case userAction.GOOGLE_SIGN_IN_FAILURE:
        case userAction.EMAIL_SIGN_IN_FAILURE:
        case userAction.USER_ID_SIGN_IN_FAILURE:
            return {
                ...state,
                error: action.payload
            }

        default:
            return state;
    }
}
export default userReducer;