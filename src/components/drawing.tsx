"use client"
import { useState } from 'react';

export default function Drawing(props) {
  const {headerHeight} = props
  //const HEADER_HIGHT = 64
  const [position, setPosition] = useState({ x: 0, y: headerHeight });
  //trailは、オブジェクト型{ x: number; y: number; }[]の配列
  //useStateの初期値として、[]（空の配列）を渡す
  const [trail, setTrail] = useState<{ x: number; y: number; }[]>([]);

  const handlePointerMove = ((e: React.MouseEvent<HTMLDivElement>) => {
    if (e.clientY > headerHeight) {
      setPosition({ x: e.clientX, y: e.clientY });
      setTrail((prevTrail) => [...prevTrail, { x: e.clientX, y: e.clientY }]);
    }
  });

  return (
    <div
      onPointerMove={handlePointerMove}
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
      }}>

      {trail.map((point, index) => {
        if (index === 0) {
          return null; // 最初の座標点は線を描画しない
        }

        const prevPoint = trail[index - 1];

        return (
          <div
            key={index}
            style={{
              position: 'absolute',
              backgroundColor: 'red',
              width: '20px',
              height: '20px',
              transform: `translate(${prevPoint.x}px, ${prevPoint.y-headerHeight}px)`,
              transition: 'transform 0.05s ease-out',
            }}
          />
        );
      })}

      <div 
        style={{
          position: 'absolute',
          backgroundColor: 'red',
          borderRadius: '50%',
          transform: `translate(${position.x}px, ${position.y-headerHeight}px)`,
          left: -10,
          top: -10,
          width: 20,
          height: 20,
      }} />
    </div>
  )
}
