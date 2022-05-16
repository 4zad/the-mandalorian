import { memo } from 'react';
import classnames from 'classnames';

import styles from './Process.module.scss';

import Description from '../Description/Description';

import { processContent, processEyebrow, processGraphicsDesc, processVid3Desc, processVid4Desc } from '@/data/data';

export type Props = {
  className?: string;
};

function Process({ className }: Props) {
  return (
    <div className={classnames(styles.Process, className)}>
      <Description content={processContent} />
      <div className={styles.vid1Container}>
        <Description content={processGraphicsDesc} />
      </div>
      <div className={styles.vid2Container}>
        <Description content={processGraphicsDesc} />
      </div>
      <Description content={processEyebrow} />
      <div className={styles.vid3Container}>
        <Description content={processVid3Desc} />
      </div>
      <div className={styles.vid4Container}>
        <Description content={processVid4Desc} />
      </div>
    </div>
  );
}

export default memo(Process);
