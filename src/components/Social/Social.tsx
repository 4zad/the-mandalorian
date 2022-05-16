import { memo } from 'react';
import classnames from 'classnames';

import styles from './Social.module.scss';

import Description from '../Description/Description';

import { socialContent } from '@/data/data';

export type Props = {
  className?: string;
};

function Social({ className }: Props) {
  return (
    <div className={classnames(styles.Social, className)}>
      <Description content={socialContent.desc} />
      <div className={styles.textContainer}>
        <p className={styles.shortNum}>{socialContent.smallNum}</p>
        <p className={styles.num}>{socialContent.num}</p>
      </div>
    </div>
  );
}

export default memo(Social);
