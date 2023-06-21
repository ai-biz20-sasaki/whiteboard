import React from 'react';
import Image from 'next/image';

type IconCircleProps = {
  size: number
}

export default function IconCircle(props: IconCircleProps) {
  const { size } = props

  return (
    <Image 
      src="/icons/circle-solid.svg"
      className=""
      alt="Icon"
      width={size}
      height={size}
    />

//    <svg 
//      xmlns="http://www.w3.org/2000/svg"
//      viewBox="0 0 512 512"
//      className={`w-${size} h-${size} fill-white`}
//    >
//      {/* Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.*/}
//      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/>
//    </svg>
  )
}
