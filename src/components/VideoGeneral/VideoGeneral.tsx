import { memo } from 'react';
import classnames from 'classnames';
import Vimeo from '@u-wave/react-vimeo';

import styles from './VideoGeneral.module.scss';

export type Props = {
  className?: string;
  isFullWidth?: boolean;
  link: string;
};

// Will take 100% of div width unless component has fullWidth = true, which will then be the full viewport width
function VideoGeneral({ className, isFullWidth, link }: Props) {
  return (
    <div className={classnames(styles.VideoGeneral, className)}>
      <Vimeo video={link} className={classnames({ [styles.isFullWidth]: isFullWidth })} />
    </div>
  );
}

export default memo(VideoGeneral);
