import { memo, useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

import styles from './Cursor.module.scss';
import { gsap } from 'gsap';
import useWindowSize from '@/hooks/use-windowsize';
import { useAppSelector } from '@/redux';
export type Props = {
  className?: string;
};

function Cursor({ className }: Props) {
  // Random Offscreen for devices with no cursor
  const [mousePos, setMousePos] = useState({ x: -200, y: -200 });
  const specMouse = useAppSelector((state) => state.specMouse);
  const slideIndex = useAppSelector((state) => state.slideIndex);
  const inCarousel = useAppSelector((state) => state.inCarousel);
  const cursorRef = useRef<HTMLDivElement>(null);
  // Allows for variable cursor dims when needed
  let cursorDims = { x: 20, y: 20 };

  const width = useWindowSize();
  const [renderRightArrow, setRenderRightArrow] = useState(false);
  const [renderLeftArrow, setRenderLeftArrow] = useState(false);

  function updateMousePos(e: MouseEvent): void {
    setMousePos({ x: e.clientX, y: e.clientY });
  }

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePos);
  }, []);

  useEffect(() => {
    if (slideIndex == 0 && inCarousel) {
      setRenderRightArrow(true);
      setRenderLeftArrow(false);
    } else if (slideIndex == 1 && inCarousel) {
      if (width > 768) {
        setRenderLeftArrow(true);
        setRenderRightArrow(false);
      } else {
        setRenderLeftArrow(true);
        setRenderRightArrow(true);
      }
    } else if (slideIndex == 2 && inCarousel) {
      setRenderLeftArrow(true);
      setRenderRightArrow(false);
    } else {
      setRenderLeftArrow(false);
      setRenderRightArrow(false);
    }
  }, [inCarousel, slideIndex]);

  useEffect(() => {
    let xOffset = cursorDims.x / 2;
    let yOffset = cursorDims.y / 2;

    gsap.to(cursorRef.current, { x: mousePos.x - xOffset, y: mousePos.y - yOffset });
  }, [mousePos]);

  useEffect(() => {
    if (specMouse) {
      gsap.to(cursorRef.current, { scaleX: 2.5, scaleY: 2.5, borderWidth: 1, duration: 0.3 });
    } else {
      gsap.to(cursorRef.current, { scaleX: 1, scaleY: 1, duration: 0.3 });
    }
  }, [specMouse]);

  return (
    <div
      ref={cursorRef}
      className={classnames(
        styles.Cursor,
        {
          [styles.normal]: !specMouse,
          [styles.special]: specMouse
        },
        className
      )}
    >
      {renderLeftArrow && specMouse && <div className={classnames(styles.arrow, styles.left)} />}
      {renderRightArrow && specMouse && <div className={classnames(styles.arrow, styles.right)} />}
    </div>
  );
}

export default memo(Cursor);
