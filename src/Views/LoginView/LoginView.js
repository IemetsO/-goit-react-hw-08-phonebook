import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../Redux/auth';
import Button from 'react-bootstrap/Button';
import s from "../LoginView/LoginView.module.css"



export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
    dispatch(authOperations.login({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div className={s.container}>
      <h1 className={s.text}>Login Page</h1>

      <form onSubmit={handleSubmit}  autoComplete="off">
        <div>
        <label className={s.text}>
          email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            className ={s.input}
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
            className ={s.input}
          />
        </label>
        </div>
        <Button variant="primary" type="submit" className={s.button}>Log In</Button>
      </form>
    </div>
  )}