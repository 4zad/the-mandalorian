import { memo } from 'react';
import classnames from 'classnames';

import styles from './Process.module.scss';

import Description from '../Description/Description';
import VideoGeneral from '../VideoGeneral/VideoGeneral';

export type Props = {
  className?: string;
  processContent: {
    backgroundText: {
      top: string;
      bottom: string;
    };
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

function Process({ className, processContent }: Props) {
  return (
    <div className={classnames(styles.Process, className, processContent)}>
      <div className={styles.processTextContainer}>
        <Description content={processContent.descContent} />
      </div>
      <div className={styles.bgTextContainer}>
        <p className={styles.bgText}>
          {processContent.backgroundText.top}
          <br />
          <span className={styles.bottomText}>{processContent.backgroundText.bottom}</span>
        </p>
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
    </div>
  );
}

export default memo(Process);
