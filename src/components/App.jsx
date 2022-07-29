import React from 'react';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import authOperations from '../Redux/auth/auth-operations';
import PrivateRoute from './UserMenu/PrivateRoute';
import PublicRoute from './PublicRoute';
import AppBar from './Navigation/Navigation';
import { Spinner } from 'react-bootstrap';
const HomeView = lazy(() => import('../Views/HomeView/HomeView'));
const RegisterView = lazy(() => import('../Views/RegisterView/RegisterView'));
const LoginView = lazy(() => import('../Views/LoginView/LoginView'));
const UserMenu = lazy(() => import('../components/UserMenu/UserMenu'));


const App = () => {
  const dispatch = useDispatch();
  const isRefreshingCurrentUser = useSelector(
    state => state.auth.isRefreshingCurrentUser
  );

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isRefreshingCurrentUser && (
      <div>
        <AppBar />
        <Suspense fallback={ <Spinner animation="border" role="status" className="mt-5">
            <span className="visually-hidden">Loading...</span>
          </Spinner>}>
          <Routes>
          <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <UserMenu />
                </PrivateRoute>
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
              index
              element={
                <PublicRoute redirectTo="/contacts" restricted>
                  <HomeView />
                </PublicRoute>
              }
            />

            <Route path="*" element={<p>There's nothing here: 404!</p>} />
          </Routes>
        </Suspense>
      </div>
    )
  );
};

export default App;
