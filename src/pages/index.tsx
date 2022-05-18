import { memo, useEffect, useRef } from 'react';
import classnames from 'classnames';
import gsap from 'gsap';

import styles from './index.module.scss';

import Head from '@/components/Head/Head';
import Carousel from '@/components/Carousel/Carousel';
import VideoModal from '@/components/VideoModal/VideoModal';

import Hero from '@/components/Hero/Hero';
import Collage from '@/components/Collage/Collage';
import Process from '@/components/Process/Process';

import { heroData, collageData, carouselItems } from '@/data/data';

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
      <Process />
      <Head />
<<<<<<< HEAD
      <VideoModal />
      <Hero className={className} data={heroData} />
      <Collage content={collageData} />
      <Carousel carouselItems={carouselItems} />
=======
      {/* <Hero className={className} data={heroData} />
      <Collage content={collageData} /> */}
      {/* <Hero className={className} data={heroData} /> */}
>>>>>>> 3cb1170 (feature: conditional rendering for process and style editing)
    </main>
  );
}

export default memo(Home);
