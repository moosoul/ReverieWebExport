'use client'

import { useState } from 'react'
import ProductDetail from './ProductDetail'

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
  ProductDetail: ProductDetailType
}) {
  const [showDetail, setShowDetail] = useState(false)
  return (
    <>
      <div
        onClick={() => setShowDetail(!showDetail)}
        className="product-item shrink-0 mr-24 hover:opacity-80 cursor-pointer active:opacity-80"
      >
        <img src={props.src} alt={props.alt} className="w-60 h-78" />
      </div>
      {showDetail && (
        <ProductDetail
          onBackClick={() => setShowDetail(false)}
          {...props.ProductDetail}
        />
      )}
    </>
  )
}
