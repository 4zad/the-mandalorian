import { memo } from 'react';
import classnames from 'classnames';

import styles from './HeroText.module.scss';

export type Props = {
  className?: string;
  titles: {
    subTitle: string;
    title: string;
  };
};

const HeroText: React.FC<Props> = ({ className, titles }: Props) => {
  return (
    <div className={classnames(styles.heroText, className)}>
      <span className={classnames(styles.subTitle)}>{titles.subTitle}</span>
      <h1 className={classnames(styles.title)}>{titles.title}</h1>
    </div>
  );
};

export default memo(HeroText);
