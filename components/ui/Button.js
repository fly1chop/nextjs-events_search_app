import Link from 'next/link.js';
import styles from './Button.module.css';

function Button({ children, link, onClick }) {
  return (
    <>
      {link ? (
        <Link href={link} className={styles.btn}>
          {children}
        </Link>
      ) : (
        <button className={styles.btn} onClick={onClick}>
          {children}
        </button>
      )}
    </>
  );
}

export default Button;
