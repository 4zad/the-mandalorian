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
};

function Description({ className, content, isSmallText = false }: Props) {
  return (
    <div className={classnames(styles.Description, className)}>
      <div className={styles.textContainer}>
        <p className={styles.title}>{content.title}</p>
        <p className={classnames(styles.desc, { [styles.smallDesc]: isSmallText })}>{content.description}</p>
      </div>
    </div>
  );
}

export default memo(Description);
