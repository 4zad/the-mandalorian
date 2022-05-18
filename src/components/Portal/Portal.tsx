import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

export const Portal = (props: {
  divId: string;
  children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined;
}) => {
  const el = useRef(document.createElement('div'));
  useEffect(() => {
    const portal = document.getElementById(props.divId);
    portal?.appendChild(el.current);

    return () => {
      portal?.removeChild(el.current);
    };
  }, [props.children]);

  return ReactDOM.createPortal(props.children, el.current);
};

export const PortalDiv = (props: { divId: string }) => <div id={props.divId}></div>;
