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
  const [mousePos, setMousePos] = useState({ x: -200, y: -200 });
  const specMouse = useAppSelector((state) => state.specMouse);
  const slideIndex = useAppSelector((state) => state.slideIndex);
  const inCarousel = useAppSelector((state) => state.inCarousel);
  const cursorRef = useRef<HTMLDivElement>(null);
  let cursorDims = { normal: { x: 20, y: 20 }, special: { x: 40, y: 40 } };

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
    let xOffset;
    let yOffset;
    if (specMouse) {
      xOffset = cursorDims.special.x / 2;
      yOffset = cursorDims.special.y / 2;
    } else {
      xOffset = cursorDims.normal.x / 2;
      yOffset = cursorDims.normal.y / 2;
    }

    gsap.to(cursorRef.current, { x: mousePos.x - xOffset, y: mousePos.y - yOffset });
  }, [mousePos]);

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
      {renderLeftArrow && <div className={classnames(styles.arrow, styles.left)} />}
      {renderRightArrow && <div className={classnames(styles.arrow, styles.right)} />}
    </div>
  );
}

export default memo(Cursor);
