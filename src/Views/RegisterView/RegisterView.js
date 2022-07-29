import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../Redux/auth/auth-operations';
import s from "../RegisterView/RegisterView.module.css"

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
      <form onSubmit={handleSubmit}>
        <div>
        <label className={s.text} >
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            className ={s.input}
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
            className ={s.input}
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
            className ={s.input}
          ></input>
        </label>
        </div>
        <button type="submit" className={s.button}>Register</button>
      </form>
    </div>
  );
}
