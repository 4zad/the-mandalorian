import { memo } from 'react';
import classnames from 'classnames';

import styles from './Description.module.scss';

export type Props = {
  className?: string;
  descContent: {
    title: string;
    description: string;
    servicesTitle: string;
    servicesText: string;
  };
};

function Description({ className, descContent }: Props) {
  return (
    <div className={classnames(styles.Description, className)}>
      <div className={styles.textContainer}>
        <p className={styles.subtitle}>{descContent.title}</p>
        <p className={styles.mainText}>{descContent.description}</p>
        <p className={styles.subtitle}>{descContent.servicesTitle}</p>
        <p className={styles.servicesContent}>{descContent.servicesText}</p>
      </div>
    </div>
  );
}

export default memo(Description);
