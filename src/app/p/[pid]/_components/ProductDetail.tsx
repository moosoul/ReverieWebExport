'use client'

import BackButton from '@components/BackButton/BackButton'
import BuyNowButton from './BuyNowButton'
import { useEffect, useState } from 'react'
import classNames from 'classnames'
import ProductImage from './ProductImage'
import { PostType } from '@services/types/postPage.type'
type PostPageProps = {
  name: string
  description: string
  price: number
  imgUrl: string
  url: string
  post: PostType
  onBackClick?: () => void
}

export default function ProductDetail(props: PostPageProps) {
  const [show, setShow] = useState(false)

  const [nameInner, setNameInner] = useState(props.name)
  const [descriptionInner, setDescriptionInner] = useState(props.description)
  const [priceInner, setPriceInner] = useState(props.price)
  const [imgUrlInner, setImgUrlInner] = useState(props.imgUrl)
  const [urlInner, setUrlInner] = useState(props.url)

  useEffect(() => {
    const t = setTimeout(() => {
      setShow(true)
    }, 100)
    return () => {
      clearTimeout(t)
    }
  }, [])

  function milliFormat(p: number) {
    const num = Number.parseFloat(`${p / 100}`).toFixed(2)

    return (
      num &&
      num.toString().replace(/\d+/, function (s) {
        return s.replace(/(\d)(?=(\d{3})+$)/g, '$1,')
      })
    )
  }
  return (
    <div
      className={classNames(
        show ? 'translate-x-0' : 'translate-x-[-100vw]',
        'transition-transform',
        'fixed h-[calc(100vh-55px)] lg:h-[calc(100vh-110px)] top-55 lg:top-110 left-0 bg-white lg:w-full'
      )}
    >
      <div className="product-detail pt-24 px-40 lg:pt-40 lg:px-40">
        <div className="lg:flex">
          <div className="flex shrink-0 justify-between">
            <BackButton
              onClick={() => {
                setShow(false)
                const t = setTimeout(() => {
                  props.onBackClick?.()
                  clearTimeout(t)
                }, 200)
              }}
            />
            <div className="lg:hidden">
              <BuyNowButton url={props.url} />
            </div>
          </div>

          <div className="mt-36 lg:mt-25 shrink-0 flex justify-center">
            <img
              src={imgUrlInner}
              alt=""
              className="w-287 h-372 lg:w-474 lg:h-615"
            />
          </div>
          <div className="mt-48 lg:mt-50 text-[#434348] px-8 lg:px-64">
            <p className="product-title text-[16px] leading-[19px] lg:text-[32px] lg:leading-[38px] font-bold">
              {nameInner}
            </p>
            <div className="product-infos mt-16 text-[12px] leading-[14px] lg:mt-32 lg:text-[20px] lg:leading-[24px] lg:h-238">
              <p className="product-content">{descriptionInner}</p>
              <p className="product-price font-normal mt-8 lg:mt-16">
                ${milliFormat(+priceInner)}
              </p>
            </div>
            <div className="flex justify-end">
              <BuyNowButton url={urlInner} />
            </div>
            <div className="hidden lg:block lg:pt-32">
              <p className="product-in-post lg:text-[15px] lg:leading-[18px] font-bold">
                Products in this post
              </p>
              <div className="product-list pt-16 lg:pt-24 w-350 lg:w-528 overflow-x-auto flex">
                {Object.keys(props.post.products).map((productKey) => {
                  const productTemp = props.post.products[productKey]
                  return (
                    <div
                      onClick={() => {
                        setNameInner(productTemp.name)
                        setDescriptionInner(productTemp.descriptions)
                        setPriceInner(productTemp.final_price)
                        setImgUrlInner(productTemp.image_urls.product_image)
                        setUrlInner(productTemp.url)
                      }}
                      key={productTemp.name}
                      className="product-item shrink-0 mr-24 lg:mr-32 hover:opacity-80 cursor-pointer active:opacity-80"
                    >
                      <img
                        src={productTemp.image_urls.product_image}
                        alt={productTemp.name}
                        className="w-60 h-78 lg:w-80 lg:h-104"
                      />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
