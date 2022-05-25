import { memo, useRef, useEffect, useState } from 'react';
import classnames from 'classnames';

import styles from './ScrollingText.module.scss';

export type Props = {
  className?: string;
  scrollingText: string;
};

function ScrollingText({ className, scrollingText }: Props) {
  const scrollTextRef = useRef<HTMLDivElement>(null);
  const [scrollTextVisible, setScrollTextVisible] = useState<boolean>();
  let offsetTop: number;
  let offsetCalculated: boolean = false;

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setScrollTextVisible(entry.isIntersecting);
    });

    if (scrollTextRef.current) {
      observer.observe(scrollTextRef.current);
    }

    // scrolling effect and event listener initialization
    const scrollEffect = () => {
      const scrollText = document.querySelector<HTMLDivElement>('#scrollText');
      if (scrollText) {
        // scrollText.style.cssText = `transform: translateX(-${(scrollY - offsetTop) / 15}%);`;
        scrollText.setAttribute('style', `transform: translateX(-${(window.scrollY - offsetTop) / 15}%);`);
        // console.log(window.scrollY);
        // console.log(scrollText.offsetTop);
      }
    };

    if (scrollTextVisible) {
      if (!offsetCalculated) {
        offsetTop = scrollY;
        offsetCalculated = true;
      }
      window.addEventListener('scroll', scrollEffect);
    }

    return () => {
      window.removeEventListener('scroll', scrollEffect);
    };
  });

  return (
    <div className={classnames(styles.textWrapper, className)} ref={scrollTextRef}>
      <div className={styles.text} id="scrollText">
        {scrollingText}
      </div>
    </div>
  );
}

export default memo(ScrollingText);
