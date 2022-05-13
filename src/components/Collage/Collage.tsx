import { memo } from 'react';
import classnames from 'classnames';

import styles from './Collage.module.scss';

export type Props = {
  className?: string;
};

function Collage({ className }: Props) {
  return <div className={classnames(styles.Collage, className)}>Collage component</div>;
}

export default memo(Collage);
