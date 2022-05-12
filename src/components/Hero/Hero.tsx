import { memo } from 'react';
import classnames from 'classnames';

import HeroNav from './HeroNav/HeroNav';
import HeroText from './HeroText/HeroText';

import styles from './Hero.module.scss';
import HeroScrollBtn from './HeroScrollBtn/HeroScrollBtn';

export type Props = {
  className?: string;
  titles: {
    smallTitle: string;
    bigTitle: string;
  };
};

const Hero: React.FC<Props> = ({ className, titles }: Props) => {
  return (
    <header className={classnames(styles.header, className)}>
      <section className={classnames(styles.hero)}>
        <HeroNav />
        <HeroText titles={titles} />
        <HeroScrollBtn />
      </section>
    </header>
  );
};

export default memo(Hero);
