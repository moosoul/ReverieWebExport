import LikeIcon from '@components/Icons/LikeIcon'
import CommentIcon from '@components/Icons/CommentIcon'
import RemixIcon from '@components/Icons/RemixIcon'
import SizedImg from '@components/SizedImg/SizedImg'
import classNames from 'classnames'

type PostBigImageProps = {
  src: string
  likeCount: number
  commentCount: number
  remixCount: number
  dateStr: string
}
export default function PostBigImage(props: PostBigImageProps) {
  return (
    <div className="w-310 h-460">
      <div className="w-310 h-437 p-4 mb-7 shrink-0 relative">
        <div
          style={{
            borderImage: 'linear-gradient(45deg, #b4b4b9, #3b3b40) 1',
          }}
          className="h-437 w-310 border-solid border-[1px] bg-[#E4E7EF] absolute top-0 left-0"
        ></div>
        <div className="w-302 h-400 m-4 shadow-[0px_0px_1px_1px_#00000040] absolute top-0 left-0"></div>

        <div className="w-full h-458 custom-scroll-bar-horizontal p-1 bg-transparent overflow-x-auto overflow-y-hidden relative">
          <img alt="" className="w-full h-398" src={props.src} />
          <SizedImg src={props.src} />
        </div>
        <div
          className={classNames(
            'text-[#434348] bg-[#E4E7EF] text-[12px] leading-[14px] mx-5 flex justify-between',
            'absolute left-0 top-414 w-300'
          )}
        >
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
        <div className="w-300 h-0 border-t-[1px] my-4 border-solid border-[#525358] absolute top-0 left-5"></div>

        <div className="w-300 h-0 border-b-[1px] my-4 border-solid border-[#525358] absolute top-399 left-5"></div>

        <div className="w-0 h-400 border-l-[1px] m-4 border-solid border-[#525358] absolute top-0 left-0"></div>
        <div className="w-0 h-400 border-l-[1px] m-4 border-solid border-[#525358] absolute top-0 right-0"></div>
      </div>
    </div>
  )
}
