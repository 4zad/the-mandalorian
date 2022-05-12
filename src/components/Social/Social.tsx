import { memo } from 'react';
import classnames from 'classnames';

import styles from './Social.module.scss';

export type Props = {
  className?: string;
  socialContent: {
    title: string;
    description: string;
    number: string;
  };
};

function Social({ className, socialContent }: Props) {
  return (
    <div className={classnames(styles.Social, className)}>
      <div className={styles.textContainer}>
        <p className={styles.title}>{socialContent.title}</p>
        <p className={styles.description}>{socialContent.description}</p>
        <p className={styles.number}>{socialContent.number}</p>
      </div>
    </div>
  );
}

export default memo(Social);
