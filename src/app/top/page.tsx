"use client"
import { useRef, useEffect, useState } from 'react';
import Header from "@/components/header"
import Drawing from "@/components/drawing"
import Footer from "@/components/footer"

export default function Top() {
  const [headerHeight, setHeaderHeight] = useState(0)
  const headerRef = useRef<HTMLDivElement>(null);
  //const headerRef = useRef(null); //これはTypeScriptの型定義でエラー

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
        <Header />
      </div>
      <Drawing headerHeight={headerHeight} />
      <Footer />
    </>
  )
}
