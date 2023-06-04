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
          borderImage: 'linear-gradient(45deg, #b4b4b9, #3b3b40) 1',
        }}
        className="w-160 h-225 border-solid border-[1px] bg-[#E4E7EF] p-2 mb-7 shrink-0"
      >
        <img
          alt=""
          className="w-full h-206 border-[1px] border-solid border-[#525358] shadow-[0px_0px_1px_1px_#00000040]"
          src={withS3Prefix(props.src)}
        />
        <p className="text-[#434348] text-[10px] leading-[12px] mt-2 ml-2">
          {props.title}
        </p>
      </div>
    </Link>
  )
}
