import Link from 'next/link.js';
import { ReactNode } from 'react';
import styles from './Button.module.css';

interface Props {
  children: ReactNode;
  link?: string;
  onClick?: () => void;
}

function Button({ children, link, onClick }: Props) {
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
