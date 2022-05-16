import { memo, useEffect, useRef } from 'react';
import classnames from 'classnames';
import gsap from 'gsap';

import styles from './index.module.scss';

import Head from '@/components/Head/Head';
import Hero from '@/components/Hero/Hero';

import { heroText, heroImages } from '@/data/data';

type Props = {
  className: string;
};

function Home({ className }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLHeadingElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const timeline = gsap
      .timeline()
      .fadeIn(titleRef.current, 0.2)
      .fadeIn(descriptionRef.current, 0.4)
      .fadeIn(listRef.current?.childNodes, { stagger: 0.1 }, 0.6);

    return () => {
      timeline?.kill();
    };
  }, []);

  return (
    <main className={classnames(styles.home, className)} ref={containerRef}>
      <Head />
      <Hero className={className} titles={heroText} images={heroImages} />
      ``
    </main>
  );
}

export default memo(Home);
