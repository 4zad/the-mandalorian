import { memo, useRef, useEffect } from 'react';
import classnames from 'classnames';

import styles from './VideoModal.module.scss';
import Vimeo from '@vimeo/player';

import CloseIcon from '@/components/svgs/xmark-solid.svg';

export type Props = {
  className?: string;
  id: number;
};

function VideoModal({ className, id }: Props) {
  const playerRef = useRef<HTMLDivElement>(null);

  // css padding bottom trick
  // css video modal close and open
  useEffect(() => {
    let options = {
      id: id,
      // pick width value somehow relative to the screen
      width: 1000,
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
    <div className={classnames(styles.VideoModal, className)}>
      <CloseIcon className={styles.svgClose} />
      <div className={styles.player} ref={playerRef} />
    </div>
  );
}

export default memo(VideoModal);
