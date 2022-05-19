import { memo } from 'react';
import classnames from 'classnames';

import styles from './FullScreenVideo.module.scss';

import VideoGeneral from '@/components/VideoGeneral/VideoGeneral';

export type Props = {
  className?: string;
  vidId: number;
  imLink: string;
};

function FullScreenVideo({ className, vidId, imLink }: Props) {
  return (
    <div className={classnames(styles.FullScreenVideo, className)}>
      <VideoGeneral vidId={vidId} imLink={imLink} />
    </div>
  );
}

export default memo(FullScreenVideo);
