import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Cursor = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: rgba(194, 24, 91, 0.5);
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: width 0.2s, height 0.2s;
  z-index: 9999;
`;

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', onMouseMove);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return <Cursor style={{ left: `${position.x}px`, top: `${position.y}px` }} />;
};

export default CustomCursor;
