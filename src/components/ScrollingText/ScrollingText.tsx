import { memo } from 'react';
import classnames from 'classnames';

import styles from './ScrollingText.module.scss';

export type Props = {
  className?: string;
};

function ScrollingText({ className }: Props) {
  return <div className={classnames(styles.ScrollingText, className)}>ScrollingText component</div>;
}

export default memo(ScrollingText);
