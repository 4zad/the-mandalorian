import { memo } from 'react';
import classnames from 'classnames';

import styles from './AwardsDropdownCard.module.scss';

export type Props = {
  className?: string;
  awardItems: {
    key: string;
    year: string;
    award: string;
  }[];
};

function AwardsDropdownCard({ className, awardItems }: Props) {
  return (
    <div className={classnames(styles.AwardsDropdownCard, className)}>
      <div className={styles.textHolder}>
        {awardItems.map((awardItem) => {
          return (
            <div key={awardItem.key}>
              <p className={styles.subtitle}>{awardItem.year}</p>
              <p className={styles.awardBody}>{awardItem.award}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default memo(AwardsDropdownCard);
