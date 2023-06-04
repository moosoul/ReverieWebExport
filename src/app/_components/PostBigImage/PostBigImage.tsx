import LikeIcon from '@components/Icons/LikeIcon'
import CommentIcon from '@components/Icons/CommentIcon'
import RemixIcon from '@components/Icons/RemixIcon'
import { type } from 'os'

type PostBigImageProps = {
  src: string
  likeCount: number
  commentCount: number
  remixCount: number
  dateStr: string
}
export default function PostBigImage(props: PostBigImageProps) {
  return (
    <div
      style={{
        borderImage: 'linear-gradient(45deg, #b4b4b9, #3b3b40) 1',
      }}
      className="w-310 h-437 border-solid border-[1px] bg-[#E4E7EF] p-4 mb-7 shrink-0"
    >
      <img
        alt=""
        className="w-full h-400 border-[1px] border-solid border-[#525358] shadow-[0px_0px_1px_1px_#00000040]"
        src={props.src}
      />
      <div className="text-[#434348] text-[12px] leading-[14px] px-3 mt-8 flex justify-between">
        <div className="flex">
          <div className="flex">
            <LikeIcon />
            <p className="ml-8">{props.likeCount}</p>
          </div>
          <div className="flex ml-16">
            <CommentIcon />
            <p className="ml-8">{props.commentCount}</p>
          </div>
          <div className="flex ml-16">
            <RemixIcon />
            <p className="ml-8">{props.remixCount}</p>
          </div>
        </div>
        <div>
          <p>{props.dateStr}</p>
        </div>
      </div>
    </div>
  )
}
