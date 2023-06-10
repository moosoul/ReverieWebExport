'use client'
import { TRANSPARENT_IMAGE } from '@consts/commonConsts'
import withS3Prefix from '@utils/withS3Prefix'
import Link from 'next/link'

export default function PostCard(props: {
  src: string
  title: string
  id: string
}) {
  return (
    <Link href={`/p/${props.id}`}>
      <div
        style={{
          borderImage: 'linear-gradient(135deg, #b4b4b9, #3b3b40) 1',
        }}
        className="w-159 h-225 lg:w-453 lg:h-640 border-solid border-[1px] lg:border-[2px] lg:p-7 bg-[#E4E7EF] p-2 mb-9 lg:mb-14 shrink-0"
      >
        <img
          alt=""
          className="w-full h-206 lg:h-588 border-[1px] border-solid border-[#525358] shadow-[0px_0px_1px_1px_#00000040] lg:shadow-[0px_0px_2px_2px_#00000040] object-cover object-left
          bg-[linear-gradient(360deg,#B2B6C2_-3.63%,#E3E4E8_27.65%,#E8E8E8_37.48%,#E3E4E8_55.8%,#CACCD2_78.59%,#B4B8C0_107.19%)]
          "
          src={props.src ? withS3Prefix(props.src) : TRANSPARENT_IMAGE}
        />
        <p className="text-[#434348] text-[10px] leading-[12px] lg:text-[20px] lg:leading-[28px] lg:mt-8 mt-2 ml-2 overflow-hidden whitespace-nowrap text-ellipsis">
          {props.title}
        </p>
      </div>
    </Link>
  )
}
