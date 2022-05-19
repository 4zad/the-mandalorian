import { memo, useRef, useEffect } from 'react';
import classnames from 'classnames';

import styles from './VideoModal.module.scss';
import Vimeo from '@vimeo/player';
import scroll from '@/services/lock-body-scroll';

import CloseIcon from '@/components/svgs/xmark-solid.svg';
import { setVideoId, useAppDispatch, useAppSelector } from '@/redux';

export type Props = {
  className?: string;
};

function VideoModal({ className }: Props) {
  const playerRef = useRef<HTMLDivElement>(null);
  const videoId = useAppSelector((state) => state.videoId);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (videoId === -1) {
      scroll.unlock();
      return;
    } else {
      scroll.lock();
      let options = {
        id: videoId,
        responsive: true,
        loop: false,
        autoplay: false
      };

      if (playerRef.current !== null) {
        let player = new Vimeo(playerRef.current, options);
        player.on('play', () => {
          console.log('play');
        });
      }
    }
  }, [videoId]);

  return (
    <>
      {videoId !== -1 && (
        <div
          className={classnames(styles.VideoModal, className)}
          onClick={() => {
            dispatch(setVideoId(-1));
          }}
        >
          <CloseIcon className={styles.svgClose} />
          <div className={styles.videoWrapper}>
            <div className={styles.player} ref={playerRef} />
          </div>
        </div>
      )}
    </>
  );
}

export default memo(VideoModal);
