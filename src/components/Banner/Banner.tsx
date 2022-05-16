import { memo } from 'react';
import classnames from 'classnames';

import styles from './Banner.module.scss';

import BannerImage from '@/assets/images/banner-img.png';

export type Props = {
  className?: string;
  tags: {
    title: string;
    description: string;
  };
};

function Banner({ className, tags }: Props) {
  return (
    <div className={classnames(styles.Banner, className)}>
      <div className={styles.imgWrapper}>
        <img src={BannerImage} alt="Mandalorian Billboard" />
      </div>
      <div className={styles.tags}>
        <div className={styles.subtitle}>{tags.title}</div>
        <div className={styles.tagsContent}>{tags.description}</div>
      </div>
    </div>
  );
}

export default memo(Banner);
