'use client'

import { useState } from 'react'
import ProductDetail from './ProductDetail'
import { PostType } from '@services/types/postPage.type'

type ProductDetailType = {
  name: string
  description: string
  price: number
  imgUrl: string
  url: string
}

export default function ProductImage(props: {
  src: string
  alt: string
  post: PostType
  ProductDetail: ProductDetailType
}) {
  const [showDetail, setShowDetail] = useState(false)
  return (
    <>
      <div
        onClick={() => setShowDetail(!showDetail)}
        className="product-item shrink-0 mr-24 lg:mr-32 hover:opacity-80 cursor-pointer active:opacity-80"
      >
        <img
          src={props.src}
          alt={props.alt}
          className="w-60 h-78 lg:w-80 lg:h-104"
        />
      </div>
      {showDetail && (
        <ProductDetail
          post={props.post}
          onBackClick={() => setShowDetail(false)}
          {...props.ProductDetail}
        />
      )}
    </>
  )
}
