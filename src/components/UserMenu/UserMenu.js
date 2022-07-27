import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from 'Redux/auth';


export default function UserMenu() {
  const name = useSelector(state => state.auth.user.name);
  const dispatch = useDispatch()
  

 

  return (
    <div>
      <span>Welcome {name}</span>
      <button type="button" onClick= {() => dispatch(authOperations.logOut())}>
        logOut
      </button>
    </div>
  );
}