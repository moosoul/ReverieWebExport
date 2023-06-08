'use client'

import { getImgSize } from '@utils/getImgSize'
import { useEffect, useState } from 'react'

export default function SizedImg(props: { src: string }) {
  const [wRem, setWrem] = useState('')

  useEffect(() => {
    const hRem = 10.25641
    const hpx = 652
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
        className="h-398 lg:h-653"
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
