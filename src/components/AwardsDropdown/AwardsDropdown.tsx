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
    awardItems: {
      key: string;
      year: string;
      award: string;
    }[];
  };
};

function AwardsDropdown({ className, content }: Props) {
  return (
    <div className={classnames(styles.AwardsDropdown, className)}>
      <div className={styles.hoverTrigger}>
        <p className={styles.subtitle}>
          {content.trailerText}
          <span className={styles.awardWinnerText}>{content.winnerText}</span>
          <StarIcon className={styles.starIcon} />
        </p>
      </div>
      <p className={styles.description}>{content.description}</p>
      <div className={styles.dropdownCard}>
        <div className={styles.textHolder}>
          {content.awardItems.map((awardItem) => {
            return (
              <div key={awardItem.key}>
                <p className={styles.subtitle}>{awardItem.year}</p>
                <p className={styles.awardBody}>{awardItem.award}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default memo(AwardsDropdown);
