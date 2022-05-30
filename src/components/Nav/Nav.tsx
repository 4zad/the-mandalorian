// import { useRef } from 'react';
import Link from 'next/link';
import classnames from 'classnames';

import styles from './Nav.module.scss';

import Image from '@/components/Image/Image';
// import Logo from '@/components/svgs/buddha-logo.svg';

import { navLinks } from '@/data/data';

// const LINKS = [
//   { href: 'https://jam3.com', label: 'Jam3', file: 'three-logo.jpeg' },
//   { href: 'https://github.com/jam3', label: 'GitHub', file: 'github-icon-64b.png' }
// ].map((link) => ({
//   ...link,
//   key: `nav-link-${link.href}-${link.label}`
// }));

function Nav() {
  // const containerRef = useRef<HTMLElement>(null);

  return (
    <nav className={classnames(styles.nav)}>
      <div className={classnames(styles.navBar)}>
        <ul>
          <li>
            <Link href={navLinks.home.href}>
              <a aria-label={navLinks.home.ariaLabel}>
                <Image src={navLinks.home.src} alt={navLinks.home.alt} className={classnames(styles.buddha)} />
                {/* <Logo className={classnames(styles.buddha)} /> */}
              </a>
            </Link>
          </li>
        </ul>

        <ul className={styles.links}>
          <li>
            <svg className={styles.menuHamburger} viewBox="0 0 100 30" width="40" height="40">
              <rect className={styles.topBar} y="0" rx="4"></rect>
              <rect className={styles.bottomBar} y="30" x="20" rx="4"></rect>
            </svg>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
