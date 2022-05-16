import { memo } from 'react';
import classnames from 'classnames';

import styles from './Social.module.scss';

import Description from '../Description/Description';
import Number from '../Number/Number';

import { socialContent } from '@/data/data';
import { socialNumber } from '@/data/data';

export type Props = {
  className?: string;
};

function Social({ className }: Props) {
  return (
    <div className={classnames(styles.Social, className)}>
      <div className={styles.textContainer}>
        <Description content={socialContent} />
        <Number numContent={socialNumber} />
      </div>
    </div>
  );
}

export default memo(Social);
