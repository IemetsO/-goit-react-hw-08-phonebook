import { useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { authOperations } from '../../Redux/auth';
import Button from 'react-bootstrap/Button';
import s from '../LoginView/LoginView.module.css';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const logError = useSelector(state => state.auth.loginError)

  useEffect(() => {
    if (logError) {
      setError(true);
    }
  }, [logError]);
  

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    setError(false)
    dispatch(authOperations.login({ email, password }));
    // setEmail('');
    // setPassword('');
  };

  return (
    <div className={s.container}>
      <h1 className={s.text}>Login Page</h1>

      {error && <div className={s.infotext}>Please check your email and password</div>}

      <form onSubmit={handleSubmit} autoComplete="off">
        <div>
          <label className={s.text}>
            email
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              className={s.input}
            />
          </label>
        </div>
        <div>
          <label className={s.text}>
            password
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              className={s.input}
            />
          </label>
        </div>
        <Button variant="primary" type="submit" className={s.button}>
          Log In
        </Button>
      </form>
    </div>
  );
}
