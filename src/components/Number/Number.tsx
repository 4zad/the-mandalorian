import { memo } from 'react';
import classnames from 'classnames';

import styles from './Number.module.scss';

export type Props = {
  className?: string;
  numContent: {
    smallNum: string;
    num: string;
  };
};

function Number({ className, numContent }: Props) {
  return (
    <div className={classnames(styles.Number, className)}>
      <div className={styles.textContainer}>
        <p className={styles.shortNum}>{numContent.smallNum}</p>
        <p className={styles.num}>{numContent.num}</p>
      </div>
    </div>
  );
}

export default memo(Number);
