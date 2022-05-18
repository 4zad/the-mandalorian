import { memo, useEffect, useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import VideoGeneral from '@/components/VideoGeneral/VideoGeneral';

import classnames from 'classnames';
import useWindowSize from '@/hooks/use-windowsize';
import styles from './Carousel.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { PortalDiv } from '@/components/Portal/Portal';

export type Props = {
  className?: string;
  carouselItems: {
    key: number;
    vidId: number;
    divId: string;
    imLink: string;
    title: string;
    description: string;
  }[];
};

function Carousel({ className, carouselItems }: Props) {
  const [numSlides, setNumSlides] = useState(1);
  const width = useWindowSize();

  useEffect(() => {
    if (width < 768) {
      setNumSlides(1);
    } else {
      setNumSlides(2);
    }
  }, [width]);

  return (
    <div className={classnames(styles.Carousel, className)}>
      <Swiper
        className={styles.swiperContainer}
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={numSlides}
        // navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {carouselItems.map((carouselItem) => {
          return (
            <SwiperSlide className={styles.slide} key={carouselItem.key}>
              <div className={styles.video}>
                <VideoGeneral
                  divId={carouselItem.divId}
                  vidId={carouselItem.vidId}
                  imLink={carouselItem.imLink}
                ></VideoGeneral>
              </div>
              <p className={styles.title}>{carouselItem.title}</p>
              <p className={styles.description}>{carouselItem.description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {carouselItems.map((carouselItem) => {
        return <PortalDiv key={carouselItem.key} divId={carouselItem.divId} />;
      })}
    </div>
  );
}

export default memo(Carousel);
