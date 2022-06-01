import { memo, useEffect, useRef } from 'react';
import classnames from 'classnames';

import styles from './VideoGeneral.module.scss';

import PlayIcon from '@/components/svgs/play-icon.svg';
import PlayCircle from '@/components/svgs/play-circle.svg';

import { setSpecMouse, setVideoId, useAppDispatch, useAppSelector } from '@/redux';

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

  return (
    <div ref={vidGenRef} className={classnames(styles.VideoGeneral, className)}>
      <button
        onClick={() => {
          dispatch(setVideoId(vidId));
        }}
      >
        <PlayCircle className={styles.svgPlayCircle} />
        <PlayIcon className={styles.svgPlayIcon} />
      </button>
      <img src={imLink} alt={alt} />
    </div>
  );
}

export default memo(VideoGeneral);
