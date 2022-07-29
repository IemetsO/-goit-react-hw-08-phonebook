import { useDispatch, useSelector  } from 'react-redux';
import { Link } from 'react-router-dom';
import  authOperations  from '../../Redux/auth/auth-operations';
import s from "../Navigation/Navigation.module.css"

function AppBar() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const name = useSelector(state => state.auth.user.name);
  const dispatch = useDispatch();

  return (
    <header className={s.header}>
        <div className={s.header_left}>
      {!isLoggedIn && <Link className={s.link} to="/">Home</Link>}

      <Link className={s.link} to="/contacts">Contacts</Link>
      </div>

      {isLoggedIn ? (<div>
        <span className={s.span}>Welcome {name} !!!</span>
      <button type="button" className={s.button} onClick={() => dispatch(authOperations.logOut())}>
        logOut
      </button>
        </div>
      ) : (
        <div className={s.header_right}>
          <Link className={s.link} to="/login">Login</Link>
          <Link className={s.link} to="/register">Register</Link>
        </div>
      )}

    </header>
  );
}
export default AppBar;
