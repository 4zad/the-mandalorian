import { memo, useRef, useEffect } from 'react';
import classnames from 'classnames';

import styles from './VideoGeneral.module.scss';
import { setSpecMouse, setVideoId, useAppDispatch, useAppSelector } from '@/redux';
import gsap from 'gsap';
import { mainEase } from '@/data/eases';

export type Props = {
  className?: string;
  imLink: string;
  vidId: number;
  alt?: string;
};

function VideoGeneral({ className, imLink, vidId, alt }: Props) {
  const dispatch = useAppDispatch();
  const vidGenRef = useRef<HTMLDivElement>(null);
  const inCarousel = useAppSelector((state) => state.inCarousel);

  useEffect(() => {
    vidGenRef.current?.addEventListener('mouseenter', () => {
      dispatch(setSpecMouse(true));
    });
    vidGenRef.current?.addEventListener('mouseleave', () => {
      if (!inCarousel) dispatch(setSpecMouse(false));
    });
  }, []);

  const playCircleRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const t1 = gsap.timeline({ scrollTrigger: { trigger: vidGenRef.current, start: 'center bottom' } });
    t1.from(
      vidGenRef.current,
      {
        y: 40,
        skewX: 2,
        skewY: 2,
        opacity: 0,
        duration: 1,
        delay: 0.067,
        ease: mainEase
      },
      0
    ).from(
      playCircleRef.current,
      {
        scaleX: 0.8,
        scaleY: 0.8,
        opacity: 0,
        ease: mainEase,
        duration: 0.667
      },
      '<+=5%'
    );
  }, []);

  return (
    <div ref={vidGenRef} className={classnames(styles.VideoGeneral, className)}>
      <button
        onClick={() => {
          dispatch(setVideoId(vidId));
        }}
      >
        <svg
          ref={playCircleRef}
          className={styles.svgPlayCircle}
          width="73"
          height="73"
          viewBox="0 0 73 73"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M36.2082 71.89C55.6434 71.89 71.3988 56.1346 71.3988 36.6994C71.3988 17.2642 55.6434 1.5088 36.2082 1.5088C16.773 1.5088 1.01759 17.2642 1.01759 36.6994C1.01759 56.1346 16.773 71.89 36.2082 71.89Z"
            stroke="white"
            strokeWidth="1.5"
          />
          <path
            d="M31.0002 35.8165L31 31.0037C30.9999 29.3526 32.8875 28.4126 34.2052 29.4075L41.1857 34.6783C42.2455 35.4785 42.2455 37.0703 41.1857 37.8705L34.2052 43.1412C32.8875 44.1362 30.9999 43.1961 31 41.545L31.0002 35.8165Z"
            fill="white"
          />
        </svg>
      </button>
      <img src={imLink} alt={alt} />
    </div>
  );
}

export default memo(VideoGeneral);
