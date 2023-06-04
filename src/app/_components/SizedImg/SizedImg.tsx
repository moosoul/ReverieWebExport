'use client'

import { getImgSize } from '@utils/getImgSize'
import { useEffect, useState } from 'react'

export default function SizedImg(props: { src: string }) {
  const [wRem, setWrem] = useState(0)

  useEffect(() => {
    const hRem = 10.25641
    getImgSize(props.src).then((size) => {
      console.log(size, 'oooo')
      setWrem((size.width / size.height) * hRem)
    })
  }, [props.src])

  return (
    <div
      className="absolute top-0 left-0"
      style={{
        width: `${wRem}rem`,
      }}
    >
      <img
        alt=""
        className="h-400 shadow-[0px_0px_1px_1px_#00000040]"
        src={props.src}
        style={{
          width: `${wRem}rem`,
        }}
        onLoadedData={() => {
          console.log('loaded')
        }}
      />
    </div>
  )
}
