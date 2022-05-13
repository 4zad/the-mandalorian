import { memo } from 'react';
import classnames from 'classnames';
// import Vimeo from '@u-wave/react-vimeo';
import Vimeo from '@vimeo/player';

import styles from './VideoGeneral.module.scss';

export type Props = {
  className?: string;
  isFullWidth?: boolean;
  divID: string;
  id: number;
};

// Will take 100% of div width unless component has fullWidth = true, which will then be the full viewport width
function VideoGeneral({ className, divID, id }: Props) {
  const player = new Vimeo(divID, { id: id, width: 500 });
  player.on('play', () => {
    console.log('video was played');
  });

  return (
    <div className={classnames(styles.VideoGeneral, className)}>
      <div id={divID} />
    </div>
  );
}

export default memo(VideoGeneral);
