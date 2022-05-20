import { memo } from 'react';
import classnames from 'classnames';

import styles from './AwardsDropdown.module.scss';

import StarIcon from '@/components/svgs/star.svg';

export type Props = {
  className?: string;
  content: {
    trailerText: string;
    winnerText: string;
    description: string;
  };
};

function AwardsDropdown({ className, content }: Props) {
  return (
    <div className={classnames(styles.AwardsDropdown, className)}>
      <div className={styles.awardsWrapper}>
        <p className={styles.subtitle}>
          {content.trailerText}
          <span className={styles.awardWinnerText}>{content.winnerText}</span>
          <StarIcon className={styles.starIcon} />
        </p>
        <p className={styles.description}>{content.description}</p>
      </div>
    </div>
  );
}

export default memo(AwardsDropdown);
