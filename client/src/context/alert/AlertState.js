import React, { useReducer } from 'react'
import axios from 'axios'
import {v4} from 'uuid'
// import apiUrl from './../../apiConfig'
import AlertContext from './AlertContext'
import alertReducer from './AlertReducer'
// import setAuthToken from './../../utils/setAuthToken'
import {
	SET_ALERT,
	REMOVE_ALERT
} from '../types'

const AuthState = props => {
    const initialState = []

    const [state, dispatch] = useReducer(alertReducer, initialState)

    // Set and Remove Alert
    const setAlert = (msg, type, timeout = 5000) => {
        const id = v4()
        dispatch({
            type: SET_ALERT,
            payload: { msg, type, id}
        })
        setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id}), timeout)
    }

    return (
		<AlertContext.Provider
			value={{
                alerts: state,
                setAlert
			}}
		>
			{props.children}
		</AlertContext.Provider>
	)
}

export default AuthState