'use client'

import { getImgSize } from '@utils/getImgSize'
import { useEffect, useState } from 'react'

export default function SizedImg(props: { src: string }) {
  const [wRem, setWrem] = useState('')

  useEffect(() => {
    const hRem = 10.25641
    const hpx = 572
    getImgSize(props.src).then((size) => {
      if (window.document.documentElement.clientWidth > 1153) {
        setWrem(`${(size.width / size.height) * hpx}px`)
      } else {
        setWrem(`${(size.width / size.height) * hRem}rem`)
      }
    })
  }, [props.src])

  return (
    <div
      className="absolute p-1 top-0 left-1"
      style={{
        width: wRem,
      }}
    >
      <img
        alt=""
        className="h-398 lg:h-574 bg-[linear-gradient(360deg,#B2B6C2_-3.63%,#E3E4E8_27.65%,#E8E8E8_37.48%,#E3E4E8_55.8%,#CACCD2_78.59%,#B4B8C0_107.19%)]"
        src={props.src}
        style={{
          width: wRem,
        }}
        onLoadedData={() => {
          console.log('loaded')
        }}
      />
    </div>
  )
}
