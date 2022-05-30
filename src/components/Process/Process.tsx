import { memo, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import classnames from 'classnames';

import styles from './Process.module.scss';

import Description from '../Description/Description';
import VideoGeneral from '../VideoGeneral/VideoGeneral';
import { mainEase } from '@/data/eases';

gsap.registerPlugin(ScrollTrigger);

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
      titleAnimation: { delay: number };
      descAnimation: { delay: number };
    };
    smallVid: {
      vid: {
        imLink: string;
        vidId: number;
      };
      desc: {
        title: string;
        description: string;
        titleAnimation: { delay: number };
        descAnimation: { delay: number };
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
        titleAnimation: { delay: number };
        descAnimation: { delay: number };
      };
    };
  };
};

function Process({ className, processContent }: Props) {
  let before = useRef<HTMLDivElement>(null);
  let after = useRef<HTMLDivElement>(null);
  let vid1 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let tl_before = gsap.timeline({
      scrollTrigger: {
        trigger: vid1.current,
        start: 'top top',
        scrub: true,
        markers: true
      }
    });

    let tl_after = gsap.timeline({
      scrollTrigger: {
        trigger: vid1.current,
        start: 'top top',
        scrub: true,
        markers: true
      }
    });

    tl_before.from(before.current, { x: 160, opacity: 100, ease: mainEase });
    tl_after.from(after.current, { x: -160, opacity: 100, ease: mainEase });
  }, []);

  return (
    <div className={classnames(styles.Process, className, processContent)}>
      <div className={styles.processTextContainer}>
        <Description content={processContent.descContent} />
      </div>

      <div className={styles.bgTextContainer}>
        <div className={styles.beforeText}>
          <p ref={before} className={styles.bgText}>
            {processContent.backgroundText.top}
          </p>
        </div>
        <div className={styles.afterText}>
          <p ref={after} className={styles.bgText}>
            {processContent.backgroundText.bottom}
          </p>
        </div>
      </div>

      <div className={styles.videoBlock}>
        <div className={styles.vid1Container}>
          <div ref={vid1} className={styles.vid1PlaceholderContainer}>
            <div className={styles.vid1Placeholder}>
              <VideoGeneral imLink={processContent.largeVid.vid.imLink} vidId={processContent.largeVid.vid.vidId} />
            </div>
          </div>
          <div className={styles.text1Container}>
            <Description isSmallText={true} noPadding={true} content={processContent.smallVid.desc} />
          </div>
        </div>
        <div className={styles.vid2Container}>
          <div className={styles.vid2Placeholder}>
            <VideoGeneral imLink={processContent.smallVid.vid.imLink} vidId={processContent.smallVid.vid.vidId} />
          </div>
          <div className={styles.text2Container}>
            <Description isSmallText={true} noPadding={true} content={processContent.largeVid.desc} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Process);
