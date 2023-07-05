import React, {useReducer} from 'react'
import uuid from 'uuid'
import ContactContext from './contactContext'
import contactReducer from './contactReducer'
import {
	GET_CONTACTS,
	ADD_CONTACT,
	DELETE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_CONTACT,
	FILTER_CONTACTS,
	CLEAR_CONTACTS,
	CLEAR_FILTER,
	CONTACT_ERROR,
} from '../types'

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: 'Jill Johnson',
                email: 'jill@gmail.com',
                phone: '123-456-8800',
                type: 'personal'
            },
            {
                id: 2,
                name: 'Joe James',
                email: 'joe@gmail.com',
                phone: '555-456-3300',
                type: 'professional'
            },
            {
                id: 3,
                name: 'Jeff Junky',
                email: 'jeff@gmail.com',
                phone: '555-555-1111',
                type: 'personal'
            }
        ]
    }

    const [state, dispatch] = useReducer(contactReducer, initialState)

    // Add Contact
    // Delete Contact
    // Set Current Contact
    // Clear Current Contact
    // Update Contact
    // Filter Contact
    // Clear Filter

    return (
        <ContactContext.Provider 
        value={{
            contacts: state.contacts
        }}>
            { props.children }
        </ContactContext.Provider>
    )

}

export default ContactState