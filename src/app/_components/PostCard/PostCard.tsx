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
        className="w-160 h-225 lg:w-567 lg:h-798 border-solid border-[1px] lg:border-[2px] lg:p-9 bg-[#E4E7EF] p-2 mb-9 lg:mb-18 shrink-0"
      >
        <img
          alt=""
          className="w-full h-206 lg:h-731 border-[1px] border-solid border-[#525358] shadow-[0px_0px_1px_1px_#00000040] lg:shadow-[0px_0px_4px_4px_#00000040] object-cover object-left"
          src={props.src ? withS3Prefix(props.src) : TRANSPARENT_IMAGE}
        />
        <p className="text-[#434348] text-[10px] leading-[12px] lg:text-[20px] lg:leading-[28px] lg:mt-14 mt-2 ml-2 overflow-hidden whitespace-nowrap text-ellipsis">
          {props.title}
        </p>
      </div>
    </Link>
  )
}
