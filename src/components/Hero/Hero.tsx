import { memo, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import classnames from 'classnames';

import styles from './Hero.module.scss';

import Arrow from '@/components/svgs/arrow.svg';
import { easeInOut, easeInHero1, easeInHero2 } from '@/data/eases';

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

  gsap.registerEffect({
    name: 'levitate',
    effect: (targets: any /*RefObject<HTMLDivElement>*/, config: any) => {
      return gsap
        .timeline()
        .to(targets, {
          y: config.y,
          duration: config.duration,
          ease: easeInOut
        })
        .to(targets, {
          y: config.y + 10,
          duration: config.duration,
          ease: easeInOut
        });
    },
    defaults: { duration: 1 }
  });

  useEffect(() => {
    gsap
      .timeline()
      .to(titleRef.current, {
        delay: 0.1,
        y: 40,
        skewY: 3,
        duration: 0.3,
        ease: easeInHero1
      })
      .to(titleRef.current, {
        y: 100,
        skewY: 0,
        duration: 0.5,
        ease: easeInHero2
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
          ease: easeInHero1
        },
        '>-=100%'
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
          duration: 0.7,
          ease: easeInHero1
        },
        '<'
      )
      .to(
        window,
        {
          scrollTo: { y: 100 },
          duration: 0.5,
          ease: easeInHero1
        },
        '<'
      );
    // .effects.levitate(
    //   arrowRef.current,
    //   {
    //     duration: 1,
    //     y: 115,
    //     repeat: -1
    //   }
    // );
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
