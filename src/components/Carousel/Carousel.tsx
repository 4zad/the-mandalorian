import { memo, useEffect, useState } from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import VideoGeneral from '@/components/VideoGeneral/VideoGeneral';

import useWindowSize from '@/hooks/use-windowsize';

import classnames from 'classnames';
import styles from './Carousel.module.scss';
import 'swiper/css';
import 'swiper/css/pagination';

export type Props = {
  className?: string;
  carouselItems: {
    key: number;
    vidId: number;
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
        className={styles.sliderWrapper}
        modules={[Pagination]}
        spaceBetween={15}
        slidesPerView={numSlides}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {carouselItems.map((carouselItem) => {
          return (
            <SwiperSlide className={styles.slide} key={carouselItem.key}>
              <div className={styles.video}>
                <VideoGeneral vidId={carouselItem.vidId} imLink={carouselItem.imLink} />
              </div>
              <p className={styles.title}>{carouselItem.title}</p>
              <p className={styles.description}>{carouselItem.description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default memo(Carousel);
