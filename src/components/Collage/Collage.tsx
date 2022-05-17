import { memo } from 'react';
import classnames from 'classnames';

import styles from './Collage.module.scss';

import Image from '@/components/Image/Image';

export type Props = {
  className?: string;
  images: {
    image1: {
      name: string;
      alt: string;
    };
    image2: {
      name: string;
      alt: string;
    };
    image3: {
      name: string;
      alt: string;
    };
  };
};

function Collage({ className, images }: Props) {
  return (
    <div className={classnames(styles.collage, className)}>
      <div className={classnames(styles.collageImages)}>
        <Image src={images.image1.name} alt={images.image1.alt} className={classnames(styles.image)} />
        <Image src={images.image2.name} alt={images.image2.alt} className={classnames(styles.image)} />
        <Image src={images.image3.name} alt={images.image3.alt} className={classnames(styles.image)} />
      </div>
    </div>
  );
}

export default memo(Collage);
