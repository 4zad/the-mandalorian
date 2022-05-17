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
      <div className={styles.processTextContainer}>
        <Description content={processContent} />
      </div>

      <div className={styles.vid1Container}>
        <div className={styles.vid1Placeholder}></div>
        <div className={styles.text1Container}>
          <p className={styles.subtitle}>{processGraphicsDesc.title}</p>
          <p className={styles.desc}>{processGraphicsDesc.description}</p>
        </div>
      </div>

      <div className={styles.vid2Container}>
        <div className={styles.vid2Placeholder}></div>
        <div className={styles.text2Container}>
          <p className={styles.subtitle}>{processGraphicsDesc.title}</p>
          <p className={styles.desc}>{processGraphicsDesc.description}</p>
        </div>
      </div>

      <div className={styles.eyebrowTextContainer}>
        <Description content={processEyebrow} />
      </div>

      <div className={styles.vid3Container}>
        <div className={styles.vid3Placeholder}></div>
        <div className={styles.text3Container}>
          <p className={styles.subtitle}>{processVid3Desc.title}</p>
          <p className={styles.desc}>{processVid3Desc.description}</p>
        </div>
      </div>

      <div className={styles.vid4Container}>
        <div className={styles.vid4Placeholder}></div>
        <div className={styles.text4Container}>
          <p className={styles.subtitle}>{processVid4Desc.title}</p>
          <p className={styles.desc}>{processVid4Desc.description}</p>
        </div>
      </div>
    </div>
  );
}

export default memo(Process);
