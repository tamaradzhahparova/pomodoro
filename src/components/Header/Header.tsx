import React, {FC} from 'react';
import styles from './Header.module.css';
import Logo from "./Logo/Logo";

const Header: FC = () => {
  return (<div className={styles.Header}>
    <div className={styles.container}>
      <Logo/>
      <div className={styles.stat}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <g clipPath="url(#clip0_6730_158)">
            <path d="M10 20H14V4H10V20ZM4 20H8V12H4V20ZM16 9V20H20V9H16Z" fill="#DC3E22"/>
          </g>
          <defs>
            <clipPath id="clip0_6730_158">
              <rect width="24" height="24" fill="white"/>
            </clipPath>
          </defs>
        </svg>
        <a href={'/#'} className={styles.statLink}>Статистика</a>
      </div>
    </div>
  </div>)
}

export default Header;
