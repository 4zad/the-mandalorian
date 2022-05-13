import { memo } from 'react';
import classnames from 'classnames';

import styles from './FullScreenVideo.module.scss';
import VideoGeneral from '@/components/VideoGeneral/VideoGeneral';

export type Props = {
  className?: string;
};

function FullScreenVideo({ className }: Props) {
  return (
    <div className={classnames(styles.FullScreenVideo, className)}>
      {/* The size of the Image should match the dimensions of this div    */}
      <div style={{ width: 500, height: 600 }}>
        <VideoGeneral id={148751763} imlink={'assets/images/mandaloriantest.png'}></VideoGeneral>
        {/* <VideoGeneral id={148751763} imlink={"mandaloriantest.png"}></VideoGeneral> */}
      </div>
    </div>
  );
}

export default memo(FullScreenVideo);
