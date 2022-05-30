import { memo, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import classnames from 'classnames';

import styles from './Hero.module.scss';

import Arrow from '@/components/svgs/arrow.svg';

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
  // const easeIn1: gsap.EaseFunction = gsap.parseEase(`0.9, 0.0, 0.1, 1.0`);
  const easeIn2: gsap.EaseFunction = gsap.parseEase(`1.0, 0.0, 0.7, 1.0`);
  const easeIn3: gsap.EaseFunction = gsap.parseEase(`0, 0.3, 0.0, 1.0`);

  const subTitleRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null)!;

  useEffect(() => {
    gsap
      .timeline()
      .to(titleRef.current, {
        delay: 0.1,
        y: 40,
        skewY: 3,
        duration: 0.3,
        ease: easeIn2
      })
      .to(titleRef.current, {
        y: 100,
        skewY: 0,
        duration: 0.5,
        ease: easeIn3
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
          ease: easeIn2
        },
        '>-=100%'
      )
      .to(
        window,
        {
          scrollTo: { y: 100 },
          duration: 0.5,
          ease: easeIn2
        },
        '<'
      );

    //.from(
    //   subTitleRef.current,
    //   {
    //     duration: 0.667,
    //     y: -150,
    //     autoAlpha: 0,
    //     ease: easeIn2
    //   },
    //   1
    // ).from(
    //   containerRef.current,
    //   {
    //     scale: 1.1,
    //     duration: 1,
    //     ease: easeIn2
    //   },
    //   0
    // ).to(
    //   arrowRef.current,
    //   {
    //     y: 70,
    //     ease: easeIn1
    //   },
    //   1.7
    // ).to(
    //   arrowRef.current!.children[0].children[0].children[2],
    //   {
    //     ease: easeIn1,
    //     fill: 'black',
    //     duration: 1
    //   },
    //   1.5
    // );
  }, []);

  return (
    <header className={classnames(styles.header, className)}>
      <section
        className={classnames(styles.hero)}
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${heroBg})` }}
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
