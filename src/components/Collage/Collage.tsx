import { memo, useRef, useEffect /*, useState*/ } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import classnames from 'classnames';

import styles from './Collage.module.scss';

import { linearEase } from '@/data/eases';
import Image from '@/components/Image/Image';

export type Props = {
  className?: string;
  content: {
    image: {
      src: string;
      alt: string;
    }[];
    scrollingText: string;
  };
};

gsap.registerPlugin(ScrollTrigger);

function Collage({ className, content }: Props) {
  const scrollTextRef = useRef<HTMLDivElement>(null);
  // const [scrollTextVisible, setScrollTextVisible] = useState<boolean>();
  // let offsetTop: number;
  // let offsetCalculated: boolean = false;

  useEffect(() => {
    // const observer = new IntersectionObserver((entries) => {
    //   const entry = entries[0];
    //   setScrollTextVisible(entry.isIntersecting);
    // });

    // if (scrollTextRef.current) {
    //   observer.observe(scrollTextRef.current);
    // }

    // // scrolling effect and event listener initialization
    // const scrollEffect = () => {
    //   const scrollText = document.querySelector<HTMLDivElement>('#scrollText');
    //   if (scrollText) {
    //     scrollText.setAttribute('style', `transform: translateX(-${(window.scrollY - offsetTop) / 15}%);`);
    //   }
    // };

    // if (scrollTextVisible) {
    //   if (!offsetCalculated) {
    //     offsetTop = window.scrollY;
    //     offsetCalculated = true;
    //   }
    //   window.addEventListener('scroll', scrollEffect);
    // }

    // return () => {
    //   window.removeEventListener('scroll', scrollEffect);
    // };

    // gsap.to(
    //   scrollTextRef.current,
    //   {
    //     scrollTrigger: {
    //       trigger: scrollTextRef.current,
    //       start: 'top bottom', // when top of scroll trigger element touches bottom of viewport
    //       end: 'bottom top', // when bottom of scroll trigger element touches top of viewport
    //       toggleActions: 'play none reverse none',
    //       scrub: true
    //     },
    //     xPercent: -50,
    //     ease: linearEase
    //   }
    // );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: scrollTextRef.current,
          start: 'top 110%', // when top of scroll trigger element touches bottom of viewport
          end: 'bottom -20%', // when bottom of scroll trigger element touches top of viewport
          toggleActions: 'play none reverse none',
          scrub: 1
        }
      })
      .fromTo(
        scrollTextRef.current,
        {},
        {
          xPercent: window.innerWidth <= 768 ? -75 : -85,
          yPercent: window.innerWidth <= 768 ? -15.27 : -19,
          ease: linearEase
        }
      );
  });

  return (
    <div className={classnames(styles.collage, className)}>
      <div className={styles.collageImages}>
        {content.image.map((image: { src: string; alt: string }) => (
          <Image className={styles.image} src={image.src} alt={image.alt} key={image.src} />
        ))}
      </div>

      <div className={classnames(styles.textWrapper, className)} ref={scrollTextRef}>
        <div className={styles.text} id="scrollText">
          {content.scrollingText}
        </div>
      </div>
    </div>
  );
}

export default memo(Collage);
