import { memo } from 'react';
import classnames from 'classnames';

import styles from './Collage.module.scss';

import Image from '@/components/Image/Image';

export type Props = {
  className?: string;
  images: {
    image1: string;
    image2: string;
    image3: string;
  };
};

function Collage({ className, images }: Props) {
  return (
    <div className={classnames(styles.collage, className)}>
      <div className={classnames(styles.collageImages)}>
        <Image
          src={images.image1}
          alt="Illustration of the Mandalorian at night"
          className={classnames(styles.image)}
        />
        <Image src={images.image2} alt="'The Mandalorian' poster image" className={classnames(styles.image)} />
        <Image
          src={images.image3}
          alt="Illustration of the Mandalorian entering a door"
          className={classnames(styles.image)}
        />
      </div>
    </div>
  );
}

export default memo(Collage);
