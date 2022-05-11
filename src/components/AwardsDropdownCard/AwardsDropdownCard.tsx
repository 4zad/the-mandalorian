import { memo } from 'react';
import classnames from 'classnames';

import styles from './AwardsDropdownCard.module.scss';

export type Props = {
  className?: string;
};

function AwardsDropdownCard({ className }: Props) {
  return (
    <div className={classnames(styles.AwardsDropdownCard, className)}>
      <div className={styles.textHolder}>
        <p className={styles.subtitle}>2019</p>
        <p className={styles.awardBody}>Clio Awards: Theatrical Audio/Visual Technique</p>

        <p className={styles.subtitle}>2020</p>
        <p className={styles.awardBody}>Golden Trailers: Best Drama</p>

        <p className={styles.subtitle}>2020</p>
        <p className={styles.awardBody}>Promax: Program Trailer Promo</p>

        <p className={styles.subtitle}>2020</p>
        <p className={styles.awardBody}>Shortys: Twitter Video</p>
      </div>
    </div>
  );
}

export default memo(AwardsDropdownCard);
