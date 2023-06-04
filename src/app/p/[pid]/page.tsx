import DownLoadBar from '@components/DownLoadBar/DownLoadBar'
import BackButton from '@components/BackButton/BackButton'
import PostBigImage from '@components/PostBigImage/PostBigImage'
import postService from '@services/postPage.service'
import withS3Prefix from '@utils/withS3Prefix'
import dayjs from 'dayjs'
import ProductImage from './_components/ProductImage'
import Link from 'next/link'
type PostPageProps = {
  params: { pid: string }
}

export default async function PostPage(props: PostPageProps) {
  const { pid } = props.params

  const { post } = await postService.getPostInfos(pid)
  return (
    <div>
      <DownLoadBar colored />
      <div>
        <div className="post-detail pt-24 px-40">
          <Link href={`/u/${post.creator_profile.user_id}`}>
            <BackButton />
          </Link>

          <div className="user-name-avatar flex justify-center items-center mb-16">
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
            src={withS3Prefix(post.preview_path)}
            likeCount={post.like_count}
            commentCount={post.comment_count}
            remixCount={post.remix_count}
            dateStr={dayjs(post.published_time * 1000).format('DD/MM/YY')}
          />
          <div className="mt-16 text-[#434348]">
            <p className="post-title text-[16px] leading-[19px] font-bold">
              {post.title}
            </p>
            <p className="post-content mt-8 text-[12px] leading-[14px]">
              {post.caption}
            </p>
          </div>
        </div>
        <div className="pl-40 pt-32 pb-42">
          <p className="product-in-post text-[10px] leading-[12px] font-bold">
            Products in this post
          </p>
          <div className="product-list pt-16 w-350 overflow-x-scroll flex">
            {Object.keys(post.products).map((productKey) => {
              const productTemp = post.products[productKey]
              return (
                <ProductImage
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
  )
}
