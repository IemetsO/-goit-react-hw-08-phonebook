import AuthNavigation from "../AuthNavigation/AuthNavigation";
import UserMenu from "../UserMenu/UserMenu";



export default function AppBar() {



  return (
    <header>
    { {isLoggedIn:toString()} ? <UserMenu /> : <AuthNavigation/> } 
    </header>
  );
}