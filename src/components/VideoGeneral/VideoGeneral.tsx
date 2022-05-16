import { memo, useState } from 'react';
import classnames from 'classnames';

import styles from './VideoGeneral.module.scss';

import PlayIcon from '@/components/svgs/play-icon.svg';
import PlayCircle from '@/components/svgs/play-circle.svg';

import VideoModal from '@/components/VideoModal/VideoModal';

export type Props = {
  className?: string;
  imLink: string;
  vidId: number;
};

function VideoGeneral({ className, imLink, vidId }: Props) {
  const [modalOpen, setModalOpen] = useState(false);

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
      <img src={imLink}></img>
      {modalOpen && <VideoModal id={vidId} />}
    </div>
  );
}

export default memo(VideoGeneral);
