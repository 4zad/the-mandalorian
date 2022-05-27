import { memo, useRef, useEffect } from 'react';
import classnames from 'classnames';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { textEase } from '@/data/eases';

gsap.registerPlugin(ScrollTrigger);

import styles from './Description.module.scss';

export type Props = {
  className?: string;
  content: {
    title: string;
    description: string;
  };
  isSmallText?: boolean;
  noPadding?: boolean;
};

function Description({ className, content, isSmallText = false }: Props) {
  let title = useRef<HTMLDivElement>(null);
  let desc = useRef<HTMLDivElement>(null);
  const tl = gsap.timeline();

  useEffect(() => {
    tl.from(title.current, {
      scrollTrigger: {
        trigger: title.current,
        start: 'top 90%',
        markers: true
      },
      lazy: false,
      duration: 1,
      opacity: 0,
      y: 40,
      ease: textEase
    }).from(desc.current, {
      scrollTrigger: { trigger: title.current },
      duration: 1,
      opacity: 0,
      y: 40,
      ease: textEase,
      delay: 0.96
    });
  }, []);
  /*
  const tl = gsap.timeline();
  tl.from(title.current, {
    scrollTrigger: {
      trigger: title.current,
      // start: 'top 75%',
      markers: true
    },
    duration: 1,
    opacity: 0,
    y: 40,
    ease: textEase
  }).from(
    desc.current,
    { scrollTrigger: { trigger: title.current }, duration: 1, opacity: 0, y: 40, ease: textEase },
    0.96
  );
  */

  return (
    <div className={classnames(styles.Description, className)}>
      <div className={styles.textContainer}>
        <p ref={title} className={styles.title}>
          {content.title}
        </p>
        <p ref={desc} className={classnames(styles.desc, { [styles.smallDesc]: isSmallText })}>
          {content.description}
        </p>
      </div>
    </div>
  );
}

export default memo(Description);
