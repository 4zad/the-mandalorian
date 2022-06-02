import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Link from 'next/link';
import classnames from 'classnames';

import styles from './Nav.module.scss';

import Image from '@/components/Image/Image';
// import Logo from '@/components/svgs/buddha-logo.svg';
import { easeSnap } from '@/data/eases';

import { navLinks } from '@/data/data';

// const LINKS = [
//   { href: 'https://jam3.com', label: 'Jam3', file: 'three-logo.jpeg' },
//   { href: 'https://github.com/jam3', label: 'GitHub', file: 'github-icon-64b.png' }
// ].map((link) => ({
//   ...link,
//   key: `nav-link-${link.href}-${link.label}`
// }));

function Nav() {
  const menuHamburgerRef = useRef<HTMLDivElement>(null);
  const topBarRef = useRef<HTMLSpanElement>(null);
  const bottomBarRef = useRef<HTMLSpanElement>(null);
  const menuHamburgerTl = useRef<gsap.core.Timeline>();

  useEffect(() => {
    const menuHamburgerToggleHeight: number = 40;
    const menuHamburgerBarHeight: number = 2;
    const transformedColor: string = '#000';

    menuHamburgerTl.current = gsap
      .timeline({
        paused: true,
        reversed: true,
        defaults: {
          delay: 0.15,
          duration: 0.6,
          ease: easeSnap
        }
      })
      .to(
        topBarRef.current,
        {
          // move down 12.5% height of the parent
          // formula -> (12.5% height of the parent - height of the element divided by 2)
          y: menuHamburgerToggleHeight * 0.125 - 1 - menuHamburgerBarHeight / 2,
          rotation: -45, // 45 degrees clockwise
          backgroundColor: transformedColor
        },
        'start'
      )
      .to(
        bottomBarRef.current,
        {
          // move up 12.5% height of the parent
          // formula -> (- 12.5% height of the parent - height of the element divided by 2)
          y: -menuHamburgerToggleHeight * 0.125 - menuHamburgerBarHeight / 2,
          rotation: 45, // 45 degrees counter clockwise
          backgroundColor: transformedColor,
          scaleX: 4 / 3,
          xPercent: -12.5
        },
        'start'
      );
  });

  const toggle = () => {
    if (menuHamburgerTl.current) {
      menuHamburgerTl.current.reversed() ? menuHamburgerTl.current.play() : menuHamburgerTl.current.reverse();
    }
  };

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

        <div className={styles.menuHamburger} ref={menuHamburgerRef} onClick={toggle}>
          <span className={styles.topBar} ref={topBarRef}></span>
          <span className={styles.bottomBar} ref={bottomBarRef}></span>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
