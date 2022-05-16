import { memo, useRef, useEffect } from 'react';
import classnames from 'classnames';

import styles from './VideoModal.module.scss';
import Vimeo from '@vimeo/player';

import CloseIcon from '@/components/svgs/xmark-solid.svg';

export type Props = {
  className?: string;
  id: number;
  setModalOpen: (arg0: boolean) => void;
};

function VideoModal({ className, id, setModalOpen }: Props) {
  const playerRef = useRef<HTMLDivElement>(null);
  const mainDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let options = {
      id: id,
      responsive: true,
      loop: false,
      autoplay: false
    };

    // Closes modal on click outside of video div
    mainDivRef.current?.addEventListener('click', () => {
      setModalOpen(false);
    });

    if (playerRef.current !== null) {
      let player = new Vimeo(playerRef.current, options);

      player.on('play', () => {
        console.log('play');
      });
    }
  }, [id]);

  function closeClick() {
    setModalOpen(false);
  }

  return (
    <div ref={mainDivRef} className={classnames(styles.VideoModal, className)}>
      <button onClick={closeClick}>
        <CloseIcon className={styles.svgClose} />
      </button>
      <div className={styles.videoWrapper}>
        <div className={styles.player} ref={playerRef} />
      </div>
    </div>
  );
}

export default memo(VideoModal);
