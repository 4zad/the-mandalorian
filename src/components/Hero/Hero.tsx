import { memo, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import classnames from 'classnames';

import styles from './Hero.module.scss';

import Arrow from '@/components/svgs/arrow.svg';
import { easeInOut, easeIn1, easeIn2 } from '@/data/eases';

export type Props = {
  className?: string;
  data: {
    subTitle: string;
    title: string;
    background: string;
  };
};

const Hero: React.FC<Props> = ({ className, data }: Props) => {
  const heroBg = require(`../../assets/images/${data.background}`);

  const subTitleRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(titleRef.current, {
      delay: 0.1,
      y: 40,
      skewY: 3,
      duration: 0.3,
      ease: easeIn1
    })
      .to(titleRef.current, {
        y: 100,
        skewY: 0,
        duration: 0.5,
        ease: easeIn2
      })
      .fromTo(
        subTitleRef.current,
        {
          opacity: 0,
          y: -40
        },
        {
          opacity: 1,
          y: 100,
          duration: 0.5,
          ease: easeIn1
        },
        '>-=100%'
      )
      .to(
        window,
        {
          scrollTo: { y: 100 },
          duration: 0.5,
          ease: easeIn1
        },
        '<'
      )
      .fromTo(
        arrowRef.current,
        {
          opacity: 0,
          y: 70
        },
        {
          opacity: 1,
          y: 120,
          duration: 0.5,
          ease: easeIn1
        },
        '<+=0.2'
      )
      .to(arrowRef.current, {
        duration: 1,
        ease: easeInOut,
        yoyo: true,
        repeat: -1,
        y: 110
      });
  }, []);

  return (
    <header className={classnames(styles.header, className)}>
      <section
        className={classnames(styles.hero)}
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0.5) 100%), url(${heroBg})`
        }}
      >
        <div className={classnames(styles.heroText, className)} ref={containerRef}>
          <span className={classnames(styles.subTitle)} ref={subTitleRef}>
            {data.subTitle}
          </span>
          <h1 className={classnames(styles.title)} ref={titleRef}>
            {data.title}
          </h1>
        </div>
        <div className={classnames(styles.heroScrollBtn, className)} ref={arrowRef}>
          <span role="button">
            <Arrow className={classnames(styles.arrowImg)} />
          </span>
        </div>
      </section>
    </header>
  );
};

export default memo(Hero);
