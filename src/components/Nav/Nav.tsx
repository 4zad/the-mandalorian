import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Link from 'next/link';
import classnames from 'classnames';

import styles from './Nav.module.scss';

import Logo from '@/components/svgs/buddha-logo.svg';
import { easeIn1, menuSnap } from '@/data/eases';

import { navLinks, menuContent } from '@/data/data';

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

  const menuNavRef = useRef<HTMLDivElement>(null);
  const menuNavBgRef = useRef<HTMLDivElement>(null);
  const infoSetOneRef = useRef<HTMLDivElement>(null);
  const infoSetTwoRef = useRef<HTMLDivElement>(null);
  const infoSetThreeRef = useRef<HTMLDivElement>(null);
  const pageOneRef = useRef<HTMLDivElement>(null);
  const pageTwoRef = useRef<HTMLDivElement>(null);
  const pageThreeRef = useRef<HTMLDivElement>(null);
  const menuNavBgTl = useRef<gsap.core.Timeline>();
  const menuNavTl = useRef<gsap.core.Timeline>();

  useEffect(() => {
    const menuHamburgerToggleHeight: number = 40;
    const menuHamburgerBarHeight: number = 2;
    const transformedColor: string = '#000';
    const transitionOpenDuration: number = 0.8;
    const transitionRampDelay: number = 0.2;

    menuHamburgerTl.current = gsap
      .timeline({
        paused: true,
        reversed: true,
        defaults: {
          delay: transitionRampDelay,
          duration: transitionOpenDuration,
          ease: easeIn1
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

    menuNavBgTl.current = gsap
      .timeline({
        paused: true,
        reversed: true,
        defaults: {
          delay: transitionRampDelay,
          ease: easeIn1
        }
      })
      .from(
        menuNavBgRef.current,
        {
          height: 0,
          duration: transitionOpenDuration * 1.25
        },
        'start'
      )
      .from(
        menuNavRef.current,
        {
          height: 0,
          duration: 0
        },
        `start+=${transitionOpenDuration / 4}`
      );

    menuNavTl.current = gsap
      .timeline({
        paused: true,
        defaults: {
          delay: transitionRampDelay + (transitionOpenDuration / 5) * 2,
          ease: menuSnap
        }
      })
      .from(
        [pageOneRef.current, pageTwoRef.current, pageThreeRef.current],
        {
          autoAlpha: 0,
          y: 100,
          duration: 0.6,
          stagger: 0.1,
          skewY: 5
        },
        'start'
      )
      .from(
        [infoSetOneRef.current, infoSetTwoRef.current, infoSetThreeRef.current],
        {
          autoAlpha: 0,
          y: 100,
          duration: 0.4,
          stagger: 0.1,
          skewY: 5
        },
        'start+=0.2'
      );
  });

  const toggle = () => {
    if (menuHamburgerTl.current?.reversed()) {
      menuHamburgerTl.current?.play();
      menuNavBgTl.current?.play();
      menuNavTl.current?.restart();
    } else {
      menuHamburgerTl.current?.reverse();
      menuNavBgTl.current?.reverse();
    }
  };

  return (
    <nav className={classnames(styles.nav)}>
      <div className={classnames(styles.navBar)}>
        <ul>
          <li>
            <Link href={navLinks.home.href}>
              <a aria-label={navLinks.home.ariaLabel}>
                <Logo className={classnames(styles.buddha)} />
              </a>
            </Link>
          </li>
        </ul>

        <div className={styles.menuHamburger} ref={menuHamburgerRef} onClick={toggle}>
          <span className={styles.topBar} ref={topBarRef}></span>
          <span className={styles.bottomBar} ref={bottomBarRef}></span>
        </div>
      </div>

      <div className={classnames(styles.menu)} ref={menuNavRef}>
        <div className={classnames(styles.menuBg)} ref={menuNavBgRef}></div>
        <div className={styles.menuWrapper}>
          <div className={styles.infoWrapper}>
            <div ref={infoSetOneRef} className={styles.infoSection}>
              <p className={styles.title}>{menuContent.contactDesc.title}</p>
              <p className={styles.desc}>{menuContent.contactDesc.number}</p>
              <p className={styles.desc}>{menuContent.contactDesc.email}</p>
            </div>
            <div ref={infoSetTwoRef} className={styles.infoSection}>
              <p className={styles.title}>{menuContent.addressDesc.title}</p>
              <p className={styles.desc}>{menuContent.addressDesc.description}</p>
            </div>
            <div ref={infoSetThreeRef} className={styles.infoSection}>
              <p className={styles.title}>{menuContent.followDesc.title}</p>
              <p className={styles.desc}>{menuContent.followDesc.description}</p>
            </div>
          </div>
          <div className={styles.pagesWrapper}>
            <div ref={pageOneRef}>
              <Link href="/">
                <a className={styles.pageTitle}>{menuContent.pageOne}</a>
              </Link>
            </div>
            <div ref={pageTwoRef}>
              <Link href="/404">
                <a className={styles.pageTitle}>{menuContent.pageTwo}</a>
              </Link>
            </div>
            <div ref={pageThreeRef}>
              <Link href="/404">
                <a className={styles.pageTitle}>{menuContent.pageThree}</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
