import { memo } from 'react';
import classnames from 'classnames';

import styles from './Hero.module.scss';

import HeroText from './HeroText/HeroText';
import Arrow from '@/components/svgs/arrow.svg';

export type Props = {
  className?: string;
  titles: {
    subTitle: string;
    title: string;
  };
  images: {
    background: string;
  };
};

const Hero: React.FC<Props> = ({ className, titles, images }: Props) => {
  const heroBg = require(`../../assets/images/${images.background}`);

  return (
    <header className={classnames(styles.header, className)}>
      <section
        className={classnames(styles.hero)}
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(${heroBg})` }}
      >
        <HeroText titles={titles} />
        <div className={classnames(styles.heroScrollBtn, className)}>
          <span role="button">
            <Arrow className={classnames(styles.arrowImg)} />
          </span>
        </div>
      </section>
    </header>
  );
};

export default memo(Hero);
