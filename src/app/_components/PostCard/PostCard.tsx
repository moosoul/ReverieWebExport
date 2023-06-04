import TestImg from '../../u/[uid]/tttt.png'
import Image from 'next/image'
export default function PostCard() {
  return (
    <div
      style={{
        borderImage: 'linear-gradient(45deg, #b4b4b9, #3b3b40) 1',
      }}
      className="w-160 h-225 border-solid border-[1px] bg-[#E4E7EF] p-2 mb-7 shrink-0"
    >
      <Image
        alt=""
        className="w-full h-206 border-[1px] border-solid border-[#525358] shadow-[0px_0px_1px_1px_#00000040]"
        src={TestImg}
      />
      <p className="text-[#434348] text-[10px] leading-[12px] mt-2 ml-2">
        Rainy day in Bk
      </p>
    </div>
  )
}
