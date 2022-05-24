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
        // scrollText.style.cssText = `transform: translateX(-${(scrollY - scrollText.offsetTop)}px);`;
        scrollText.setAttribute('style', `transform: translateX(-${(scrollY - 1300) /*scrollText.offsetTop*/ / 15}%);`);
        console.log(`transform: translateX(-${scrollY - scrollText.offsetTop});`);
        // console.log(scrollText.offsetTop);
      }
    };

    if (scrollTextVisible) {
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
