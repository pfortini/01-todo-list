import logo from '../assets/logo.png';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt='Logotipo ToDo List' />
    </header>
  );
}
