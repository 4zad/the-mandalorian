import { memo, useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

import styles from './Cursor.module.scss';
import { gsap } from 'gsap';

export type Props = {
  className?: string;
};

function Cursor({ className }: Props) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const cursorRef = useRef<HTMLDivElement>(null);
  let cursorDims = { x: 10, y: 10 };

  function updateMousePos(e: MouseEvent): void {
    setMousePos({ x: e.clientX, y: e.clientY });
  }

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePos);
    // window.addEventListener('scroll', () => {setMousePos({x: mousePos.x, y: mousePos.y + window.scrollY})});
  }, []);

  useEffect(() => {
    gsap.to(cursorRef.current, { x: mousePos.x - cursorDims.x, y: mousePos.y - cursorDims.y });
  }, [mousePos]);

  return <div ref={cursorRef} className={classnames(styles.Cursor, className)}></div>;
}

export default memo(Cursor);
