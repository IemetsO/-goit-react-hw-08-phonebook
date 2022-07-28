import { useSelector } from 'react-redux';
import AuthNavigation from "../AuthNavigation/AuthNavigation";
import UserMenu from "../UserMenu/UserMenu";



export default function AppBar() {
const isLoggedIn = useSelector(state =>state.auth.isLoggedIn)


  return (
    <header>
    { {isLoggedIn:toString()} ? <UserMenu /> : <AuthNavigation/> } 
    </header>
  );
}