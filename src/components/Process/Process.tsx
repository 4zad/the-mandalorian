import { memo } from 'react';
import classnames from 'classnames';

import styles from './Process.module.scss';

import Description from '../Description/Description';
import VideoGeneral from '../VideoGeneral/VideoGeneral';
import { processContent } from '@/data/data';

export type Props = {
  className?: string;
  processContent: {
    backgroundText: string;
    descContent: {
      title: string;
      description: string;
    };
    smallVid: {
      vid: {
        imLink: string;
        vidId: number;
      };
      desc: {
        title: string;
        description: string;
      };
    };
    largeVid: {
      vid: {
        imLink: string;
        vidId: number;
      };
      desc: {
        title: string;
        description: string;
      };
    };
  };
};

function Process({ className }: Props) {
  // const [isMobile, setMobile] = useState(true);

  // useEffect(() => {
  //   if (window.innerWidth > 376) {
  //     setMobile(false);
  //   } else {
  //     setMobile(true);
  //   }
  //   const updateMedia = () => {
  //     if (window.innerWidth > 376) {
  //       setMobile(false);
  //     } else {
  //       setMobile(true);
  //     }
  //   };
  //   window.addEventListener('resize', updateMedia);
  //   return () => window.removeEventListener('resize', updateMedia);
  // }, []);

  return (
    <div className={classnames(styles.Process, className, processContent)}>
      <div className={styles.processTextContainer}>
        <Description content={processContent.descContent} />
      </div>

      <div className={styles.videoBlock}>
        <div className={styles.vid1Container}>
          <div className={styles.vid1PlaceholderContainer}>
            <div className={styles.vid1Placeholder}>
              <VideoGeneral imLink={processContent.largeVid.vid.imLink} vidId={processContent.largeVid.vid.vidId} />
            </div>
          </div>
          <div className={styles.text1Container}>
            <p className={styles.subtitle}>{processContent.largeVid.desc.title}</p>
            <p className={styles.desc}>{processContent.largeVid.desc.description}</p>
          </div>
        </div>

        <div className={styles.vid2Container}>
          <div className={styles.vid2Placeholder}>
            <VideoGeneral imLink={processContent.smallVid.vid.imLink} vidId={processContent.smallVid.vid.vidId} />
          </div>
          <div className={styles.text2Container}>
            <p className={styles.subtitle}>{processContent.smallVid.desc.title}</p>
            <p className={styles.desc}>{processContent.smallVid.desc.description}</p>
          </div>
        </div>
      </div>

      {/* <div className={styles.eyebrowTextContainer}>
        <Description content={processEyebrow} />
      </div>

      <div>
        {isMobile ? (
          <div className={styles.carouselContainer}>INSERT CAROUSEL</div>
        ) : (
          <div className={styles.carouselContainer}>
            <div className={styles.vid3Container}>
              <div className={styles.vid3Placeholder}></div>
              <div className={styles.text3Container}>
                <p className={styles.subtitle}>{processVid3Desc.title}</p>
                <p className={styles.desc}>{processVid3Desc.description}</p>
              </div>
            </div>

            <div className={styles.vid4Container}>
              <div className={styles.vid4Placeholder}></div>
              <div className={styles.text4Container}>
                <p className={styles.subtitle}>{processVid4Desc.title}</p>
                <p className={styles.desc}>{processVid4Desc.description}</p>
              </div>
            </div>
          </div>
        )}
      </div> */}
    </div>
  );
}

export default memo(Process);
