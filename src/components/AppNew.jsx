import React from 'react';
import HomeView from "./HomeView/HomeView"
import RegisterView from './RegisterView/RegisterView';
import { Route, Routes } from 'react-router-dom';
import LoginView from "./LoginView/LoginView";
import AuthNavigation from './Navigation/Navigation';






const App = () => {

return (
  <div>
    <AuthNavigation></AuthNavigation>

    <Routes>
   <Route  path ="/" element = {<HomeView></HomeView>}></Route>
   <Route path ="/register" element = {<RegisterView></RegisterView>}></Route>
   <Route path ="/login" element = {<LoginView></LoginView>}></Route>
   {/* <Route path ="/contacts" component = {ContactsView}></Route> */} */
</Routes>
   </div>
);

}

export default App
// <h1>Phonebook</h1>
// <Form></Form>
// <h2>Contacts</h2>
// <Filter></Filter>
// <ContactList></ContactList>