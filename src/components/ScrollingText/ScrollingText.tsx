import { memo } from 'react';
import classnames from 'classnames';

import styles from './ScrollingText.module.scss';

export type Props = {
  className?: string;
  scrollingText: {
    text: string;
  };
};

function ScrollingText({ className, scrollingText }: Props) {
  return (
    <div className={classnames(styles.textWrapper, className)}>
      <span className={styles.text}>{scrollingText.text}</span>
    </div>
  );
}

export default memo(ScrollingText);
