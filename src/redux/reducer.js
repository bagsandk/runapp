import { combineReducers } from "redux"

const initialstatetcps = {
    nilai: {
        nilai1: '0',
        nilai2: '0',
        nilai3: '0',
    },
    pesan: 'tes'
}
const initialstatetcpc = {
    nilai: null
}
const tcpsreducer = (state = initialstatetcps, action) => {
    if (action.type == 'UPDATE') {
        return {
            ...state,
            pesan: action.value
        }
    }
    else if (action.type == 'SET_NILAI1') {
        return {
            ...state,
            nilai: {
                ...nilai,
                nilai1: action.value
            }
        }
    }
    else if (action.type == 'SET_NILAI2') {
        return {
            ...state,
            nilai: {
                ...nilai,
                nilai2: action.value
            }
        }
    }
    else if (action.type == 'SET_NILAI3') {
        return {
            ...state,
            nilai: {
                ...nilai,
                nilai3: action.value
            }
        }
    }
    else if (action.type == 'RESET_NILAI') {
        return {
            ...state,
            nilai: {
                nilai1: null,
                nilai2: null,
                nilai3: null
            }
        }
    }
    return state
}
const tcpcreducer = (state = initialstatetcpc, action) => {
    if (action.type == 'UPDATE_NILAI') {
        return {
            ...state,
            nilai: action.value
        }
    }
    return state
}
const reducer = combineReducers({
    tcpcreducer,
    tcpsreducer,
})
export default reducer