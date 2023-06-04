import DownLoadBar from '@components/DownLoadBar/DownLoadBar'
import Image from 'next/image'
import testImg from './tttt.png'
import BackButton from '@components/BackButton/BackButton'
import BuyNowButton from './BuyNowButton'
type PostPageProps = {
  params: { pdid: string }
}

export default function ProductDetail(props: PostPageProps) {
  const { pdid } = props.params

  return (
    <div>
      <DownLoadBar colored />
      <div className="product-detail pt-24 px-40">
        <div className="flex justify-between">
          <BackButton />
          <BuyNowButton />
        </div>
        <div className="mt-36 flex justify-center">
          <Image src={testImg} alt="" className="w-287 h-372" />
        </div>
        <div className="mt-48 text-[#434348] px-8">
          <p className="product-title text-[16px] leading-[19px] font-bold">
            RICK OWENS
          </p>
          <div className="product-infos mt-16 text-[12px] leading-[14px]">
            <p className="product-content font-bold">
              Semi Long Short with Beige Strings
            </p>
            <p className="product-price mt-8">1000$</p>
          </div>
        </div>
      </div>
    </div>
  )
}
