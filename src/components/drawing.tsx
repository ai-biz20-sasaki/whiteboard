"use client"
import { useState } from 'react';

type DrawingProps = {
  headerHeight: number
  currentSize: number
  currentColor: string
}

export default function Drawing(props: DrawingProps) {
  const {headerHeight, currentSize, currentColor} = props
  const [isDrawing, setIsDrawing] = useState(false);
  //trailは、オブジェクト型{ x: number; y: number; }[]の配列
  //useStateの初期値として、[]（空の配列）を渡す
  const [trail, setTrail] = useState<{ x: number; y: number; }[]>([]);

  const handlePointerMove = ((e: React.PointerEvent<HTMLDivElement>) => {
    if (isDrawing) {
      if (e.clientY > headerHeight) {
        setTrail((prevTrail) => [...prevTrail, { x: e.clientX, y: e.clientY }]);
      }
    }
  });

  const handlePointerDown = ((e: React.PointerEvent<HTMLDivElement>) => {
    setIsDrawing(true)
  });

  const handlePointerUp = ((e: React.PointerEvent<HTMLDivElement>) => {
    setIsDrawing(false)
  });

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
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
              backgroundColor: currentColor,
              borderRadius: '50%',
              width: `${currentSize * 0.8}px`,
              height: `${currentSize * 0.8}px`,
              transform: prevPoint ? `translate(${prevPoint.x}px, ${prevPoint.y - headerHeight}px)` : undefined,
              transition: 'transform 0.05s ease-out',
            }}
          />
        );
      })}

    </div>
  )
}
