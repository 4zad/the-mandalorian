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
  alt?: string;
};

function VideoGeneral({ className, imLink, vidId, alt }: Props) {
  const [modalOpen, setModalOpen] = useState(false);

  function buttonClick() {
    setModalOpen(true);
  }

  return (
    <div className={classnames(styles.VideoGeneral, className)}>
      <button onClick={buttonClick}>
        <PlayCircle className={styles.svgPlayCircle} />
        <PlayIcon className={styles.svgPlayIcon} />
      </button>
      <img src={imLink} alt={alt}></img>
      {modalOpen && <VideoModal id={vidId} setModalOpen={setModalOpen} />}
    </div>
  );
}

export default memo(VideoGeneral);
