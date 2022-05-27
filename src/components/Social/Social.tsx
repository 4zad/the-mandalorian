import { memo } from 'react';
import classnames from 'classnames';

import styles from './Social.module.scss';

import Description from '../Description/Description';

export type Props = {
  className?: string;
  socialContent: {
    desc: {
      title: string;
      description: string;
      titleAnimation: { delay: number };
      descAnimation: { delay: number };
    };
    smallNum: string;
    num: string;
  };
};

function Social({ className, socialContent }: Props) {
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
