import DownLoadBar from '@components/DownLoadBar/DownLoadBar'
import Image from 'next/image'
import testImg from './tttt.png'
import BackButton from '@components/BackButton/BackButton'
import PostBigImage from '@components/PostBigImage/PostBigImage'
type PostPageProps = {
  params: { pid: string }
}

function ProductImage() {
  return (
    <div className="product-item shrink-0 mr-24">
      <Image src={testImg} alt="" className="w-60 h-78" />
    </div>
  )
}

export default function PostPage(props: PostPageProps) {
  const { pid } = props.params

  return (
    <div>
      <DownLoadBar colored />
      <div className="post-detail pt-24 px-40">
        <BackButton />
        <div className="user-name-avatar flex justify-center items-center mb-16">
          <Image
            src={testImg}
            className="w-24 h-24 border-[2px] border-solid border-[#E4E7EF] rounded-full"
            alt="user profile img"
          />

          <p className="text-[10px] leading-[12px] ml-8">@samkelisiwe_ms_</p>
        </div>

        <PostBigImage />
        <div className="mt-16 text-[#434348]">
          <p className="post-title text-[16px] leading-[19px] font-bold">
            rainy day in BK
          </p>
          <p className="post-content mt-8 text-[12px] leading-[14px]">
            high fashion, art and wine lover. aquarius. mediterranean. brand
            manager. i write about high-end eyewear. Lorem Ipsum dolor sit amet,
            pero se pa sur, mais yes pero it’s no bueno de la mama ihjefe
            ekfenfek, high fashion, art and wine lover. aquarius. medite
          </p>
        </div>
      </div>
      <div className="pl-40 pt-32 pb-42">
        <p className="product-in-post text-[10px] leading-[12px] font-bold">
          Products in this post
        </p>
        <div className="product-list pt-16 w-350 overflow-x-scroll flex">
          <ProductImage />
          <ProductImage />
          <ProductImage />
          <ProductImage />
          <ProductImage />
          <ProductImage />
          <ProductImage />
        </div>
      </div>
    </div>
  )
}
