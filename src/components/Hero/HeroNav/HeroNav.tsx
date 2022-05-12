import { memo } from 'react';
import classnames from 'classnames';
// import Link from 'next/link' // will be needed later when link functionality added

import styles from './HeroNav.module.scss';

export type Props = {
  className?: string;
};

const HeroNav: React.FC<Props> = ({ className }: Props) => {
  return (
    <nav className={classnames(styles.heroNav, className)}>
      <div className={classnames(styles.navBar)}>
        <ul>
          <li>
            <a href="" aria-label="Home">
              <img
                src={'../../../assets/imagesbuddha-logo.png'}
                alt="Buddha Jones"
                className={classnames(styles.buddha)}
              ></img>
            </a>
          </li>
        </ul>

        <ul className={styles.links}>
          <li>
            <a href={'/'} target="_blank" rel="noopener noreferrer" aria-label={'Menu'}>
              <svg className={styles.menuHamburger} viewBox="0 0 100 80" width="40" height="40">
                <rect className={styles.topBar} y="0" rx="3"></rect>
                <rect className={styles.bottomBar} y="30" x="20" rx="3"></rect>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default memo(HeroNav);
