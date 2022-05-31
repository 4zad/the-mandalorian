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
  const beforeRef = useRef<HTMLDivElement>(null);
  const afterRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 60%',
        end: 'bottom 10%',
        toggleActions: 'play none reverse none',
        scrub: true,
        markers: true
      }
    });

    tl.from(beforeRef.current, { x: 160, autoAlpha: 0, opacity: 100, ease: mainEase }, 0).from(
      afterRef.current,
      { x: -180, autoAlpha: 0, opacity: 100, ease: mainEase },
      0
    );
  }, []);

  return (
    <div ref={containerRef} className={classnames(styles.Process, className, processContent)}>
      <div className={styles.processTextContainer}>
        <Description content={processContent.descContent} />
      </div>

      <div className={styles.bgTextContainer}>
        <div className={styles.beforeText}>
          <p ref={beforeRef} className={styles.bgText}>
            {processContent.backgroundText.top}
          </p>
        </div>
        <div className={styles.afterText}>
          <p ref={afterRef} className={styles.bgText}>
            {processContent.backgroundText.bottom}
          </p>
        </div>
      </div>

      <div className={styles.videoBlock}>
        <div className={styles.vid1Container}>
          <div className={styles.vid1PlaceholderContainer}>
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
