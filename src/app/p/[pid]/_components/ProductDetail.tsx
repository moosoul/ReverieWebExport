'use client'

import DownLoadBar from '@components/DownLoadBar/DownLoadBar'
import BackButton from '@components/BackButton/BackButton'
import BuyNowButton from './BuyNowButton'
import { useEffect, useState } from 'react'
import classNames from 'classnames'
type PostPageProps = {
  name: string
  description: string
  price: number
  imgUrl: string
  url: string
  onBackClick?: () => void
}

export default function ProductDetail(props: PostPageProps) {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => {
      setShow(true)
    }, 100)
    return () => {
      clearTimeout(t)
    }
  }, [])
  return (
    <div
      className={classNames(
        show ? 'translate-x-0' : 'translate-x-[-100vw]',
        'transition-transform',
        'fixed h-[calc(100vh-55px)] top-55 left-0 bg-white'
      )}
    >
      <div className="product-detail pt-24 px-40">
        <div className="flex justify-between">
          <BackButton
            onClick={() => {
              setShow(false)
              const t = setTimeout(() => {
                props.onBackClick?.()
                clearTimeout(t)
              }, 200)
            }}
          />
          <BuyNowButton url={props.url} />
        </div>
        <div className="mt-36 flex justify-center">
          <img src={props.imgUrl} alt="" className="w-287 h-372" />
        </div>
        <div className="mt-48 text-[#434348] px-8">
          <p className="product-title text-[16px] leading-[19px] font-bold">
            {props.name}
          </p>
          <div className="product-infos mt-16 text-[12px] leading-[14px]">
            <p className="product-content font-bold">{props.description}</p>
            <p className="product-price mt-8">{props.price}$</p>
          </div>
        </div>
      </div>
    </div>
  )
}
