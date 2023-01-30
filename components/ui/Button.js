import Link from 'next/link.js';
import styles from './Button.module.css';

function Button({ children, link }) {
  return (
    <Link href={link} className={styles.btn}>
      {children}
    </Link>
  );
}

export default Button;
