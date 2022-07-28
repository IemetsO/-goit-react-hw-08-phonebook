
import React from "react";
import UserMenu from "./../components/UserMenu/UserMenu";
import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { fetchContact} from "../Redux/contacts/contacts-operation";


const ContactsView = () =>{
    const dispatch= useDispatch()

    useEffect (() => {
        dispatch(fetchContact());
      },[dispatch])


    return(
    <div>
        <h1><UserMenu/></h1>
    </div>)
}

export default ContactsView