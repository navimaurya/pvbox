import userAction from './user-action-type'

export const setCurrentUser = user => ({
    type: userAction.SET_CURRENT_USER,
    payload: user
});

export const googleSignInStart = () => ({
    type: userAction.GOOGLE_SIGN_IN_START
})

export const googleSignInSuccess = (user) => ({
    type: userAction.GOOGLE_SIGN_IN_SUCCESS,
    payload: user
})

export const googleSignInFailuer = (error) => ({
    type: userAction.EMAIL_SIGN_IN_FAILURE,
    payload: error
})

export const emailSignInStart = (emailAndPassword) => ({
    type: userAction.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
})

export const emailSignInSuccess = (user) => ({
    type: userAction.EMAIL_SIGN_IN_SUCCESS,
    payload: user
})

export const emailSignInFailuer = (error) => ({
    type: userAction.EMAIL_SIGN_IN_FAILURE,
    payload: error
})
// 
export const userIdSignInStart = (emailAndPassword) => ({
    type: userAction.USER_ID_SIGN_IN_START,
    payload: emailAndPassword
})

export const userIdSignInSuccess = (user) => ({
    type: userAction.USER_ID_SIGN_IN_SUCCESS,
    payload: user
})

export const userIdSignInFailuer = (error) => ({
    type: userAction.USER_ID_SIGN_IN_FAILURE,
    payload: error
})

export const checkUserSession = () => ({
    type: userAction.CHECK_USER_SESSION,
})
export const signInSuccess = (user) => ({
    type: userAction.SIGN_IN_SUCCESS,
    payload: user

})


export const signInFailure = (error) => ({
    type: userAction.SIGN_IN_FAILURE,
    payload: error

})

export const signOutStart = () => ({
    type: userAction.SIGN_OUT_START,
})

export const signOutSuccess = () => ({
    type: userAction.SIGN_OUT_SUCCESS,
})

export const signOutFailure = () => ({
    type: userAction.SIGN_OUT_FAILURE,
})

export const getLoggedInUserStart = () => ({
    type: userAction.GET_LOGGEDIN_USER_START,
})
export const getLoggedInUserSuccess = (user) => ({
    type: userAction.GET_LOGGEDIN_USER_SUCCESS,
    payload: user
})

export const signUpUserStart = (user) => ({
    type: userAction.SIGN_UP_START,
    payload: user
})
export const signUpUserSuccess = (user) => ({
    type: userAction.SIGN_UP_SUCCESS,
    payload: user
})


export default setCurrentUser;