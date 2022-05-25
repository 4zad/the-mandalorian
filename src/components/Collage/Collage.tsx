import { memo, useRef, useEffect, useState } from 'react';
import classnames from 'classnames';

import styles from './Collage.module.scss';

import Image from '@/components/Image/Image';

export type Props = {
  className?: string;
  content: {
    image: {
      src: string;
      alt: string;
    }[];
    scrollingText: string;
  };
};

function Collage({ className, content }: Props) {
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
        scrollText.setAttribute('style', `transform: translateX(-${(window.scrollY - offsetTop) / 15}%);`);
      }
    };

    if (scrollTextVisible) {
      if (!offsetCalculated) {
        offsetTop = window.scrollY;
        offsetCalculated = true;
      }
      window.addEventListener('scroll', scrollEffect);
    }

    return () => {
      window.removeEventListener('scroll', scrollEffect);
    };
  });

  return (
    <div className={classnames(styles.collage, className)}>
      <div className={styles.collageImages}>
        {content.image.map((image: { src: string; alt: string }) => (
          <Image className={styles.image} src={image.src} alt={image.alt} key={image.src} />
        ))}
      </div>

      <div className={classnames(styles.textWrapper, className)} ref={scrollTextRef}>
        <div className={styles.text} id="scrollText">
          {content.scrollingText}
        </div>
      </div>
    </div>
  );
}

export default memo(Collage);
