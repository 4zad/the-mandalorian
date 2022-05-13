import { memo, useEffect, useRef, useState } from 'react';
import classnames from 'classnames';
// import Vimeo from '@u-wave/react-vimeo';
import Vimeo from '@vimeo/player';

// import Image from '@/components/Image/Image';
import PlayIcon from '@/components/svgs/play-icon.svg';
import PlayCircle from '@/components/svgs/play-circle.svg';

import styles from './VideoGeneral.module.scss';

export type Props = {
  className?: string;
  isFullWidth?: boolean;
  id: number;
  imlink: string;
};

// Will take 100% of div width unless component has fullWidth = true, which will then be the full viewport width
function VideoGeneral({ className, id, imlink }: Props) {
  const playerRef = useRef<HTMLDivElement>(null);

  const [modalOpen, setModalOpen] = useState(false);
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

  function buttonClick() {
    console.log('Button is clicked and modal is set to open');
    setModalOpen(true);
  }

  return (
    <div className={classnames(styles.VideoGeneral, className)}>
      <button onClick={buttonClick}>
        <PlayCircle className={styles.svgPlayCircle} />
        <PlayIcon className={styles.svgPlayIcon} />
      </button>
      <img src={imlink}></img>
      {modalOpen && <div className={styles.player} ref={playerRef} />}
    </div>
  );
}

export default memo(VideoGeneral);
