import { memo } from 'react';
import classnames from 'classnames';

import styles from './Hero.module.scss';

import Arrow from '@/components/svgs/arrow.svg';

export type Props = {
  className?: string;
  data: {
    subTitle: string;
    title: string;
    background: string;
  };
};

const Hero: React.FC<Props> = ({ className, data }: Props) => {
  const heroBg = require(`../../assets/images/${data.background}`);

  return (
    <header className={classnames(styles.header, className)}>
      <section
        className={styles.hero}
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(${heroBg})` }}
      >
        <div className={styles.heroText}>
          <span className={styles.subTitle}>{data.subTitle}</span>
          <h1 className={styles.title}>{data.title}</h1>
        </div>
        <div className={styles.heroScrollBtn}>
          <span role="button">
            <Arrow className={styles.arrowImg} />
          </span>
        </div>
      </section>
    </header>
  );
};

export default memo(Hero);
