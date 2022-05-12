import { memo } from 'react';
import classnames from 'classnames';

import styles from './HeroScrollBtn.module.scss';

import Arrow from '../../svgs/arrow.svg';

export type Props = {
  className?: string;
};

const HeroScrollBtn: React.FC<Props> = ({ className }: Props) => {
  return (
    <div className={classnames(styles.heroScrollBtn, className)}>
      <span role="button">
        <Arrow className={classnames(styles.arrowImg)} />
      </span>
    </div>
  );
};

export default memo(HeroScrollBtn);
