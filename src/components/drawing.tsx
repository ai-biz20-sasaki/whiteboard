"use client"
import { useState, useEffect } from 'react';

type DrawingProps = {
  headerHeight: number
  currentSize: number
  currentColor: string
  toggleDelete: boolean
}

export default function Drawing(props: DrawingProps) {
  const {headerHeight, currentSize, currentColor, toggleDelete} = props
  const [isDrawing, setIsDrawing] = useState(false);
  //trailは、オブジェクト型{ x: number; y: number; }[]の配列
  //useStateの初期値として、[]（空の配列）を渡す
  const [trail, setTrail] = useState<{ x: number; y: number; size: number; color: string }[]>([]);

  useEffect(() => {
    //Trashボタンが押され状態が変わったら、軌跡の配列をクリアする
    setTrail([])
    // This runs on mount *and also* if toggleDelete have changed since the last render
  }, [toggleDelete]);

  const handlePointerMove = ((e: React.PointerEvent<HTMLDivElement>) => {
    if (isDrawing) {
      if (e.clientY > headerHeight) {
        setTrail((prevTrail) => [...prevTrail, { x: e.clientX, y: e.clientY, size: currentSize, color: currentColor }]);
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
              backgroundColor: prevPoint.color,
              borderRadius: '50%',
              width: `${prevPoint.size * 0.8}px`,
              height: `${prevPoint.size * 0.8}px`,
              transform: prevPoint ? `translate(${prevPoint.x}px, ${prevPoint.y - headerHeight}px)` : undefined,
              transition: 'transform 0.01s ease-out',
            }}
          />
        );
      })}

    </div>
  )
}
