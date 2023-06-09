'use client'

import DownLoadBar from '@components/DownLoadBar/DownLoadBar'
import BackButton from '@components/BackButton/BackButton'
import PostBigImage from '@components/PostBigImage/PostBigImage'
import postService from '@services/postPage.service'
import withS3Prefix from '@utils/withS3Prefix'
import dayjs from 'dayjs'
import ProductImage from './_components/ProductImage'
import Link from 'next/link'
import { PostType } from '@services/types/postPage.type'
import { useState } from 'react'
import renderPopup from '@utils/renderRedirectPopup'
type PostPageProps = {
  pid: string
  post: PostType
}
// await postService.getPostInfos(pid)
export default function PostPage(props: PostPageProps) {
  const { pid, post } = props
  const [showPopup, setShowPopup] = useState(false)

  const redirectToApp = () => {
    setTimeout(function () {
      window.location.href = 'https://apps.apple.com/app/reverie/id1535818149'
    }, 200)
    window.location.href = 'com.reverie://post?id=' + pid
  }
  const showPopupFunc = () => setShowPopup(true)
  return (
    <div>
      {renderPopup(showPopup, () => setShowPopup(false), redirectToApp)}
      <DownLoadBar colored />
      <div className="post-detail pt-24 px-40 lg:flex lg:px-40 lg:pt-40">
        <Link
          className="lg:mr-60 w-24 h-24 lg:w-48 lg:h-48 block"
          href={`/u/${post.creator_profile.user_id}`}
        >
          <BackButton />
        </Link>

        <div
          onClick={showPopupFunc}
          className="user-name-avatar flex lg:hidden justify-center items-center mb-16"
        >
          <img
            src={post.creator_profile.profile_url}
            className="w-24 h-24 border-[2px] border-solid border-[#E4E7EF] rounded-full"
            alt="user profile img"
          />

          <p className="text-[10px] leading-[12px] ml-8">
            @{post.creator_profile.username}
          </p>
        </div>

        <PostBigImage
          showPopupFunc={showPopupFunc}
          src={withS3Prefix(post.preview_path)}
          likeCount={post.like_count}
          commentCount={post.comment_count}
          remixCount={post.remix_count}
          dateStr={dayjs(post.published_time * 1000).format('DD/MM/YY')}
        />
        <div>
          <div className="user-name-avatar lg:flex hidden items-center lg:mb-40 lg:mt-84">
            <img
              src={post.creator_profile.profile_url}
              className="lg:w-61 lg:h-61 lg:border-[4px] border-solid border-[#cccdd0] rounded-full"
              alt="user profile img"
            />

            <p className="lg:text-[24px] lg:leading-[28px] lg:ml-20">
              @{post.creator_profile.username}
            </p>
          </div>

          <div className="mt-16 lg:mt-40 text-[#434348]">
            <p className="post-title text-[16px] leading-[19px] lg:text-[32px] lg:leading-[38px] font-bold">
              {post.title}
            </p>
            <p className="post-content mt-8 lg:mt-8 lg:h-200 text-[12px] leading-[14px] lg:text-[20px] lg:leading-[24px]">
              {post.caption}
            </p>
          </div>
          <div className="pt-32 pb-42 lg:pt-124">
            <p className="product-in-post text-[10px] leading-[12px] lg:text-[15px] lg:leading-[18px] font-bold">
              Products in this post
            </p>
            <div className="product-list pt-16 lg:pt-24 w-350 lg:w-528 overflow-x-auto flex">
              {Object.keys(post.products).map((productKey) => {
                const productTemp = post.products[productKey]
                return (
                  <ProductImage
                    post={post}
                    key={productKey}
                    src={productTemp.image_urls.product_image}
                    alt={productTemp.name}
                    ProductDetail={{
                      name: productTemp.name,
                      description: productTemp.descriptions,
                      price: productTemp.final_price,
                      imgUrl: productTemp.image_urls.product_image,
                      url: productTemp.url,
                    }}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
