import { memo } from 'react';
import classnames from 'classnames';

import styles from './HeroText.module.scss';

export type Props = {
  className?: string;
  titles: {
    smallTitle: string;
    bigTitle: string;
  };
};

const HeroText: React.FC<Props> = ({ className, titles }: Props) => {
  return (
    <div className={classnames(styles.heroText, className)}>
      <h1 className={classnames(styles.smallTitle)}>{titles.smallTitle}</h1>

      <h1 className={classnames(styles.bigTitle)}>{titles.bigTitle}</h1>
    </div>
  );
};

export default memo(HeroText);
