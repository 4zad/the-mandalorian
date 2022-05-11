import { memo } from 'react';
import classnames from 'classnames';

import styles from './AwardsDropdown.module.scss';

import StarIcon from '@/components/svgs/star.svg';

export type Props = {
  className?: string;
};

function AwardsDropdown({ className }: Props) {
  return (
    <div className={classnames(styles.AwardsDropdown, className)}>
      <div>
        <p className={styles.subtitle}>
          Trailer 1.
          <span className={styles.awardWinnerText}> Award Winner</span>
          <StarIcon className={styles.starIcon} />
        </p>
        <p className={styles.body}>
          Oficial trailer curabitur quis nunc augue duis vulputate nisl quis dignissim vulputate.
        </p>
      </div>
    </div>
  );
}

export default memo(AwardsDropdown);
