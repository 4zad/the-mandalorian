import { memo } from 'react';
import classnames from 'classnames';

import styles from './Hero.module.scss';

export type Props = {
  className?: string;
};

function Hero({ className }: Props) {
  return <div className={classnames(styles.Hero, className)}>Hero component</div>;
}

export default memo(Hero);
