import { useSelector } from "react-redux";
import AuthNavigation from "../AuthNavigation/AuthNavigation";
import UserMenu from "../UserMenu/UserMenu";
import { Link, Nav } from 'react-router-dom';



export default function AppBar() {
  const isLoggedIn = useSelector(state=>state.auth.isLoggedIn)
  console.log(isLoggedIn)

  return (
    <header>
            <Nav>
                <Link to="/">Home</Link>

                {isLoggedIn && (
                    <Link to="/contacts">Contacts</Link>
                )}
                                
                {isLoggedIn ? <UserMenu /> : <AuthNavigation/>}

            </Nav>
          
        </header>)}
