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
        {/* <Description isSmallText={true} content={processGraphicsDesc} /> */}
        <p className={styles.subtitle}>{processGraphicsDesc.title}</p>
        <p className={styles.desc}>{processGraphicsDesc.description}</p>
      </div>
      <div className={styles.vid2Container}>
        {/* <Description className={styles.vid2} isSmallText={true} content={processGraphicsDesc} /> */}
        <div className={styles.vid2TextContainer}>
          <p className={styles.subtitle}>{processGraphicsDesc.title}</p>
          <p className={styles.desc}>{processGraphicsDesc.description}</p>
        </div>
      </div>
      <Description content={processEyebrow} />
      <div className={styles.vid3Container}>
        {/* <Description isSmallText={true} content={processVid3Desc} /> */}
        <p className={styles.subtitle}>{processVid3Desc.title}</p>
        <p className={styles.desc}>{processVid3Desc.description}</p>
      </div>
      <div className={styles.vid4Container}>
        {/* <Description isSmallText={true} content={processVid4Desc} /> */}
        <p className={styles.subtitle}>{processVid4Desc.title}</p>
        <p className={styles.desc}>{processVid4Desc.description}</p>
      </div>
    </div>
  );
}

export default memo(Process);
