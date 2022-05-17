import { memo, useRef, useEffect } from 'react';
import classnames from 'classnames';

import styles from './VideoModal.module.scss';
import Vimeo from '@vimeo/player';

import CloseIcon from '@/components/svgs/xmark-solid.svg';

export type Props = {
  className?: string;
  id: number;
  closeModal: () => void;
};

function VideoModal({ className, id, closeModal }: Props) {
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let options = {
      id: id,
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
  }, [id]);

  return (
    <div className={classnames(styles.VideoModal, className)} onClick={closeModal}>
      <CloseIcon className={styles.svgClose} />
      <div className={styles.videoWrapper}>
        <div className={styles.player} ref={playerRef} />
      </div>
    </div>
  );
}

export default memo(VideoModal);
