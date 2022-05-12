import { memo } from 'react';
import classnames from 'classnames';

import styles from './FullScreenVideo.module.scss';
// import VideoGeneral from '@/components/VideoGeneral/VideoGeneral';

export type Props = {
  className?: string;
};

function FullScreenVideo({ className }: Props) {
  return <div className={classnames(styles.FullScreenVideo, className)}></div>;
}

export default memo(FullScreenVideo);
