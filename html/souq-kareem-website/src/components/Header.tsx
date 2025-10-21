import React from 'react';
import Link from 'next/link';
import styles from '../styles/dark-theme.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">سوق كريم</Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/">الرئيسية</Link>
          </li>
          <li>
            <Link href="/about">عن الموقع</Link>
          </li>
          <li>
            <Link href="/products">المنتجات</Link>
          </li>
          <li>
            <Link href="/contact">اتصل بنا</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;