import BackIcon from './assets/backIcon.svg'
import Image from 'next/image'
export default function BuyNowButton() {
  return (
    <div
      style={{
        borderImage: 'linear-gradient(to bottom, #b4b4b9, #3b3b40) 1',
      }}
      className="w-95 h-24 hover:opacity-80 active:opacity-80 cursor-pointer border-solid border-[1px] bg-[#E4E7EF] flex justify-center items-center"
    >
      <p className="text-[10px] leading-[12px]">BUY NOW</p>
    </div>
  )
}
