import { memo, useEffect, useRef } from 'react';
import classnames from 'classnames';
import { gsap } from 'gsap';

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
  const title = useRef<HTMLDivElement>(null);
  const desc = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { titleAnimation, descAnimation } = content;

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: window.innerWidth <= 735 ? 'top 90%' : 'start 80%',
          toggleActions: 'play none none none'
        }
      })
      .from(
        title.current,
        {
          duration: 1,
          y: 40,
          autoAlpha: 0
        },
        titleAnimation.delay
      )
      .from(
        desc.current,
        {
          duration: 1,
          y: 40,
          autoAlpha: 0
        },
        descAnimation.delay
      );
  }, []);

  return (
    <div className={classnames(styles.Description, className)} ref={containerRef}>
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
