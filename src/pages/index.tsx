import { memo, useEffect, useRef } from 'react';
import classnames from 'classnames';
import gsap from 'gsap';

import styles from './index.module.scss';

import Head from '@/components/Head/Head';
import Carousel from '@/components/Carousel/Carousel';
import VideoModal from '@/components/VideoModal/VideoModal';
import Hero from '@/components/Hero/Hero';
import Description from '@/components/Description/Description';
import Collage from '@/components/Collage/Collage';
import Social from '@/components/Social/Social';
import Banner from '@/components/Banner/Banner';
import AwardsDropdown from '@/components/AwardsDropdown/AwardsDropdown';
import FullScreenVideo from '@/components/FullScreenVideo/FullScreenVideo';
import Process from '@/components/Process/Process';

import {
  // awardDropdownCardData,
  awardDropdownData,
  heroData,
  descContent,
  collageData,
  carouselItems,
  fullScreenContent,
  tags,
  socialContent,
  servicesContent,
  processContent
} from '@/data/data';

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
      <VideoModal />
      <Hero className={className} data={heroData} />
      <Description content={descContent} />
      <Description isSmallText={true} content={servicesContent} />
      <FullScreenVideo vidId={fullScreenContent.vidId} imLink={fullScreenContent.imLink} />
      <AwardsDropdown content={awardDropdownData} />
      <Carousel carouselItems={carouselItems} />
      <Process processContent={processContent} />
      <Collage content={collageData} />
      <Social socialContent={socialContent} />
      <Banner tags={tags} />
    </main>
  );
}

export default memo(Home);
