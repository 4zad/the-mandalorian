import { memo, useRef, useEffect } from 'react';
import classnames from 'classnames';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { mainEase } from '@/data/eases';

import styles from './Banner.module.scss';

import BannerImage from '@/assets/images/banner-img.png';
import Description from '../Description/Description';

gsap.registerPlugin(ScrollTrigger);

export type Props = {
  className?: string;
  tags: {
    title: string;
    description: string;
    titleAnimation: { delay: number };
    descAnimation: { delay: number };
  };
};

function Banner({ className, tags }: Props) {
  let banner_img = useRef<HTMLDivElement>(null);
  useEffect(() => {
    ScrollTrigger.refresh(true);
    if (banner_img.current !== null) {
      gsap.from(banner_img.current, {
        scrollTrigger: {
          trigger: banner_img.current,
          markers: true
        },
        duration: 1,
        y: 40,
        opacity: 0,
        skewY: 40,
        delay: 0.2,
        ease: mainEase
      });
    }
  }, []);

  return (
    <div className={classnames(styles.Banner, className)}>
      <div ref={banner_img} className={styles.imgWrapper}>
        <img src={BannerImage} alt="Mandalorian Billboard" />
      </div>
      <div className={styles.tags}>
        <Description isSmallText={true} noPadding={true} content={tags} />
      </div>
    </div>
  );
}

export default memo(Banner);
