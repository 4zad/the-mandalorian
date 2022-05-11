import { memo } from 'react';
import classnames from 'classnames';
import bannerImage from '@/assets/images/banner-img.png';

import styles from './Banner.module.scss';

export type Props = {
  className?: string;
};

function Banner({ className }: Props) {
  return (
    <div className={classnames(styles.Banner, className)}>
      <div className={styles.imgWrapper}>
        <img src={bannerImage} alt="Mandalorian Billboard" />
      </div>
      <div className={styles.tags}>
        <div className={styles.subtitle}>Tags</div>
        <div className={styles.tagsContent}>
          Trailer. Social Media Content. Disney. Disney+. Series. Drama. SCI FI. Featured
        </div>
      </div>
    </div>
  );
}

export default memo(Banner);
