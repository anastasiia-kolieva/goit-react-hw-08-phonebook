// import { useDispatch, useSelector } from 'react-redux';
// import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './zombie_head.png';
import s from './UserMenu.module.css';

export default function UserMenu() {
  //   const dispatch = useDispatch();
  //   const name = useSelector(authSelectors.getUsername);

  return (
    <div style={s.container}>
      <img src={defaultAvatar} alt="avatar" width="32" style={s.avatar} />
      {/* вставить в приветствие имейл */}
      <span style={s.name}>Добро пожаловать, </span>
      <button type="button" onClick={() => {}}>
        Выйти
      </button>
    </div>
  );
}
