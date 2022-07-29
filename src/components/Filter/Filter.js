import { filterContact } from "./../../Redux/contacts/actions";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "../Filter/Filter.module.css"



const Filter = () =>{
    const filter = useSelector(state => state.contacts.filter)
    const dispatch = useDispatch()
    return(
        <div className={s.container}>
        <label className={s.text}> Find contacts by name <input type="text" value={filter}
        onChange={event => dispatch(filterContact(event.currentTarget.value))}/></label>
        </div>
    )
} 

export default Filter

