import { useDispatch, useSelector  } from 'react-redux';
import { Link } from 'react-router-dom';
import  authOperations  from '../../Redux/auth/auth-operations';

function AppBar() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const name = useSelector(state => state.auth.user.name);
  const dispatch = useDispatch();

  return (
    <header>
      {!isLoggedIn && <Link to="/">Home</Link>}

      <Link to="/contacts">Contacts</Link>
      

      {isLoggedIn ? (<div>
        <span>Welcome {name} !!!</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        logOut
      </button>
        </div>
      ) : (
        <div>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      )}

    </header>
  );
}
export default AppBar;
