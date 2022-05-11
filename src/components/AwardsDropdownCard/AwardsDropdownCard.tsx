import { memo } from 'react';
import classnames from 'classnames';

import styles from './AwardsDropdownCard.module.scss';

export type Props = {
  className?: string;
};

function AwardsDropdownCard({ className }: Props) {
  return <div className={classnames(styles.AwardsDropdownCard, className)}>AwardsDropdownCard component</div>;
}

export default memo(AwardsDropdownCard);
