import * as actions from './actionTypes';


const setLoginName = (payload) => {
    return {
        type: actions.SET_LOGIN_NAME,
        payload
    }
}


const setAuth = (payload) => {
    return {
        type: actions.SET_AUTH,
        payload
    }
}

const setPassword =(payload)=>{
    return{
        type: actions.SET_PASSWORD,
        payload
    }
}


export {
    setLoginName, setAuth, setPassword

}