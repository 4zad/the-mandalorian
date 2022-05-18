import { memo } from 'react';
import classnames from 'classnames';

import styles from './FullScreenVideo.module.scss';

import VideoGeneral from '@/components/VideoGeneral/VideoGeneral';
import { PortalDiv } from '@/components/Portal/Portal';

export type Props = {
  className?: string;
  vidId: number;
  imLink: string;
  divId: string;
};

function FullScreenVideo({ className, vidId, imLink, divId }: Props) {
  return (
    <div className={classnames(styles.FullScreenVideo, className)}>
      <VideoGeneral divId={divId} vidId={vidId} imLink={imLink}></VideoGeneral>
      <PortalDiv divId={divId} />
    </div>
  );
}

export default memo(FullScreenVideo);
