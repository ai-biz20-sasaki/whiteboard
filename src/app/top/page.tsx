"use client"
import { useRef, useEffect, useState } from 'react';
import Header from "@/components/header"
import Drawing from "@/components/drawing"
import Footer from "@/components/footer"

export default function Top() {
  const [currentSize, setCurrentSize] = useState(24)
  const [currentColor, setCurrentColor] = useState("black")
  const [headerHeight, setHeaderHeight] = useState(0)
  const [toggleDelete, setToggleDelete] = useState(false)
  const headerRef = useRef<HTMLDivElement>(null);
  //const headerRef = useRef(null); //これはTypeScriptの型定義でエラー

  function handleOnClick(currentSize:number) {
    setCurrentSize(currentSize)
    //console.log("now handleOnClick currentSize:", currentSize)
  }

  function handleOnChange(currentColor:string) {
    setCurrentColor(currentColor);
    // 必要に応じて、色が変更された時の処理を追加します
    // 例えば、選択された色を親コンポーネントに通知するなど
    //callback(e.target.value);
  };

  function handleOnChangeTrash() {
    setToggleDelete(!toggleDelete)
  }

  useEffect(() => {
    if (headerRef.current) {
      // ここで取得した高さを使って必要な処理を行います
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, []);
  //console.log('Headerの高さ:', headerHeight);

  return (
    <>
      <div ref={headerRef}>
        <Header
          currentColor={currentColor}
          callbackOnClick={handleOnClick}
          callbackOnChange={handleOnChange}
          callbackOnClickTrash={handleOnChangeTrash}
        />
      </div>
      <Drawing
        headerHeight={headerHeight}
        currentSize={currentSize}
        currentColor={currentColor}
        toggleDelete={toggleDelete}
      />
      <Footer />
    </>
  )
}
