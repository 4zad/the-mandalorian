import { memo, useRef, useEffect } from 'react';
import classnames from 'classnames';

import styles from './VideoGeneral.module.scss';

// Will not delete until confirmation of best practices
// import PlayIcon from '@/components/svgs/play-icon.svg';
// import PlayCircle from '@/components/svgs/play-circle.svg';

import { setVideoId, useAppDispatch } from '@/redux';
import gsap from 'gsap';
<<<<<<< HEAD
import { mainEase } from '@/data/eases';
=======
import { bezier1 } from '@/data/eases';
>>>>>>> 1bba002 (feature: video general motion update)

export type Props = {
  className?: string;
  imLink: string;
  vidId: number;
  alt?: string;
};

function VideoGeneral({ className, imLink, vidId, alt }: Props) {
  const dispatch = useAppDispatch();
  const vidGenRef = useRef<HTMLDivElement>(null);
  const playCircleRef = useRef<SVGSVGElement>(null);
  const playIconRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    gsap.from(vidGenRef.current, {
      y: 40,
      skewX: 2,
      skewY: 2,
      opacity: 0,
      duration: 1,
      delay: 0.067,
      ease: mainEase,
      scrollTrigger: { trigger: vidGenRef.current, start: 'center bottom' }
    });

    gsap.from(playCircleRef.current, {
      scaleX: 0.8,
      scaleY: 0.8,
      opacity: 0,
      ease: mainEase,
      duration: 0.667,
      scrollTrigger: { trigger: vidGenRef.current, start: 'center bottom' }
    });

    gsap.from(playIconRef.current, {
      scaleX: 0.8,
      scaleY: 0.8,
      opacity: 0,
      ease: mainEase,
      duration: 0.667,
      delay: 0.067,
      scrollTrigger: { trigger: vidGenRef.current, start: 'center bottom' }
    });
  }, []);

  return (
    <div ref={vidGenRef} className={classnames(styles.VideoGeneral, className)}>
      <button
        onClick={() => {
          dispatch(setVideoId(vidId));
        }}
      >
        {/* SVGs were included like this as refs weren't able to be passed on correctly */}
        <svg
          className={styles.svgPlayCircle}
          ref={playCircleRef}
          width="73"
          height="73"
          viewBox="0 0 73 73"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="36.2082" cy="36.6994" r="35.1906" stroke="white" strokeWidth="1.5" />
        </svg>
        <svg
          className={styles.svgPlayIcon}
          ref={playIconRef}
          width="12"
          height="15"
          viewBox="0 0 12 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.556533 7.24113L0.55631 2.42834C0.556234 0.777227 2.44379 -0.162797 3.76148 0.832134L10.742 6.10286C11.8018 6.90306 11.8018 8.49489 10.742 9.29509L3.76146 14.5658C2.44378 15.5608 0.556223 14.6207 0.556292 12.9696L0.556533 7.24113Z"
            fill="white"
          />
        </svg>
      </button>
      <img src={imLink} alt={alt} />
    </div>
  );
}

export default memo(VideoGeneral);
