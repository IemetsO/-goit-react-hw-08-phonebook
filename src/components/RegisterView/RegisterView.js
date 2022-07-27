import { useState } from "react";
import { useDispatch } from "react-redux";
import  authOperations from "../../Redux/auth/auth-operations"

export default function RegisterView(){
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleChange = ({target: {name, value}}) => {
        switch (name){
            case "name":
                return setName(value);
                case "email":
                    return setEmail(value);
                    case "password":
                        return setPassword(value);
                        default:
                            return;
        }

    }

    const handleSubmit = e =>{
        e.preventDefault();
        dispatch(authOperations.register({name, email, password}));
        setName("");
        setEmail("");
        setPassword(""); 
        console.log("submit")
    }

    return(
        <div>
            <h1>Registration Page</h1>
            <form onSubmit={handleSubmit}>
                <label>Name
                    <input type="text" name = "name" value={name} onChange={handleChange}></input> 
                    </label>
                <label>Email
                    <input type="email" name = "email" value={email} onChange={handleChange}></input> 
                    </label>
                    <label>Password
                    <input type="password" name = "password" value={password} onChange={handleChange}></input> 
                    </label>
                    <button type = "submit">RegisterView</button>
            </form>
        </div>
    )
};
