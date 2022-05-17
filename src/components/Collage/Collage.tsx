import { memo } from 'react';
import classnames from 'classnames';

import styles from './Collage.module.scss';

import Image from '@/components/Image/Image';

export type Props = {
  className?: string;
  content: {
    image: {
      src: string;
      alt: string;
    }[];
  };
};

function Collage({ className, content }: Props) {
  return (
    <div className={classnames(styles.collage, className)}>
      <div className={styles.collageImages}>
        {content.image.map((image: { src: string; alt: string }) => (
          <Image className={styles.image} src={image.src} alt={image.alt} key={image.src} />
        ))}
      </div>
    </div>
  );
}

export default memo(Collage);
