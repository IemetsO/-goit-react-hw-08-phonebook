import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from '../../Redux/auth/auth-operations';
import s from '../RegisterView/RegisterView.module.css';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const regError = useSelector(state => state.auth.registerError)

  useEffect(() => {
    if (regError) {
      setError(true);
    }
  }, [regError]);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={s.container}>
      <h1 className={s.text}>Registration Page</h1>
      {error && <div className={s.infotext}>Please check your name and email, minimum length for password is 7 </div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label className={s.text}>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              className={s.input}
            ></input>
          </label>
        </div>
        <div>
          <label className={s.text}>
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              className={s.input}
            ></input>
          </label>
        </div>
        <div>
          <label className={s.text}>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              className={s.input}
            ></input>
          </label>
        </div>
        <button type="submit" className={s.button}>
          Register
        </button>
      </form>
    </div>
  );
}
