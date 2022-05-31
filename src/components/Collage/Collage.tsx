import { memo, useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import classnames from 'classnames';

import styles from './Collage.module.scss';

import { linearEase } from '@/data/eases';
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

gsap.registerPlugin(ScrollTrigger);

function Collage({ className, content }: Props) {
  const scrollTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: scrollTextRef.current,
          start: 'top 110%',
          end: 'bottom -20%',
          toggleActions: 'play none reverse none',
          scrub: 1
        }
      })
      .fromTo(
        scrollTextRef.current,
        {},
        {
          xPercent: window.innerWidth <= 768 ? -75 : -85,
          yPercent: window.innerWidth <= 768 ? -15.27 : -19,
          ease: linearEase
        }
      );
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
