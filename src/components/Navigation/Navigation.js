import { useSelector } from "react-redux";
import UserMenu from '../UserMenu/UserMenu';
import { Link } from 'react-router-dom';

function AppBar() {
        const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
        
    return (
        <header>
            
                <Link to="/">Home</Link>

                {isLoggedIn && (
                    <Link to="/contacts">Contacts</Link>
                )}
                                
                {isLoggedIn ? <UserMenu /> : <div>
                <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
                </div>
            }
            
        </header>
    );
}
export default AppBar;
