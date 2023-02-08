import Link from 'next/link.js';
import styles from './MainHeader.module.css';

function MainHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href='/'>LOGO</Link>
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link href='/events'>All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
