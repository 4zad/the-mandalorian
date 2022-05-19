import { memo } from 'react';
import classnames from 'classnames';

import styles from './VideoGeneral.module.scss';

import PlayIcon from '@/components/svgs/play-icon.svg';
import PlayCircle from '@/components/svgs/play-circle.svg';

import { setVideoId, useAppDispatch } from '@/redux';

export type Props = {
  className?: string;
  imLink: string;
  vidId: number;
  alt?: string;
};

function VideoGeneral({ className, imLink, vidId, alt }: Props) {
  const dispatch = useAppDispatch();

  return (
    <div className={classnames(styles.VideoGeneral, className)}>
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
