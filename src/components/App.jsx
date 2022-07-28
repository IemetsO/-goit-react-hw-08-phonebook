import React from 'react';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import authOperations from '../Redux/auth/auth-operations';
import PrivateRoute from './UserMenu/PrivateRoute';
import PublicRoute from './PublicRoute';
import AppBar from './Navigation/Navigation';

const HomeView = lazy(() => import('../Views/HomeView/HomeView'));
const RegisterView = lazy(() => import('../Views/RegisterView/RegisterView'));
const LoginView = lazy(() => import("../Views/LoginView/LoginView"));
const ContactsView = lazy(() => import('../Views/ContactsView'));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshingCurrentUser = useSelector(state => state.auth.isRefreshingCurrentUser)

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isRefreshingCurrentUser && (
    <div>
      <AppBar/>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute>
                <HomeView />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute redirectTo="/contacts" restricted>
                <RegisterView />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute redirectTo="/contacts" restricted>
                <LoginView />
              </PublicRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute >
                <ContactsView />
              </PrivateRoute>
            }
          />
        </Routes>
      </Suspense>
    </div>
  ))
};

export default App;
