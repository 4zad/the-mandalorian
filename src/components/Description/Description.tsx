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
    titleAnimation: { delay: number };
    descAnimation: { delay: number };
  };
  isSmallText?: boolean;
  noPadding?: boolean;
};

function Description({ className, content, isSmallText = false, noPadding = false }: Props) {
  let title = useRef<HTMLDivElement>(null);
  let desc = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(title.current, {
      scrollTrigger: {
        trigger: title.current,
        start: 'top 90%'
      },
      lazy: false,
      duration: 1,
      opacity: 0,
      y: 40,
      ease: textEase,
      delay: content.titleAnimation.delay
    });
    gsap.from(desc.current, {
      scrollTrigger: { trigger: title.current },
      duration: 1,
      opacity: 0,
      y: 40,
      ease: textEase,
      delay: content.descAnimation.delay
    });
  }, []);

  return (
    <div className={classnames(styles.Description, className)}>
      <div className={classnames(styles.textContainerPadding, { [styles.textContainer]: noPadding })}>
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
