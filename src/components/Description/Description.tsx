import { memo } from 'react';
import classnames from 'classnames';

import styles from './Description.module.scss';

export type Props = {
  className?: string;
  content: {
    title: string;
    description: string;
  };
  isSmallText?: boolean;
  noPadding?: boolean;
};

function Description({ className, content, isSmallText = false, noPadding = false }: Props) {
  return (
    <div className={classnames(styles.Description, className)}>
      <div className={classnames(styles.textContainerPadding, { [styles.textContainer]: noPadding })}>
        <p className={styles.title}>{content.title}</p>
        <p className={classnames(styles.desc, { [styles.smallDesc]: isSmallText })}>{content.description}</p>
      </div>
    </div>
  );
}

export default memo(Description);
