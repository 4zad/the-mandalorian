import { memo } from 'react';
import classnames from 'classnames';
import bannerImage from '@/assets/images/banner-img.png';

import styles from './Banner.module.scss';

export type Props = {
  className?: string;
};

function Banner({ className }: Props) {
  return (
    <>
      <div className={classnames(styles.Banner, className)}>
        {/* <h1>Banner component</h1> */}
        {/* <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim vitae voluptates dicta ipsum eius quos maiores
          libero cumque, asperiores quo laudantium, sit nam dolor iusto rerum provident saepe at placeat?
        </p> */}
        <div className={styles.imgwrapper}>
          <img className={styles.bannerimg} src={bannerImage} alt="Mandalorian Billboard" />
        </div>
        <div className={styles.tags}>
          <div className={styles.subtitle}>Tags</div>
          <div className={styles.tagscontent}>
            Trailer, Social Media Content, Disney, Disney+, Series, Drama, SCI FI, Featured
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(Banner);
