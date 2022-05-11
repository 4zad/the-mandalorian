import { memo } from 'react';
import classnames from 'classnames';

import styles from './FullScreenVideo.module.scss';

export type Props = {
  className?: string;
};

function FullScreenVideo({ className }: Props) {
  return <div className={classnames(styles.FullScreenVideo, className)}>FullScreenVideo component</div>;
}

export default memo(FullScreenVideo);
