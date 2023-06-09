import LikeIcon from '@components/Icons/LikeIcon'
import CommentIcon from '@components/Icons/CommentIcon'
import RemixIcon from '@components/Icons/RemixIcon'
import SizedImg from '@components/SizedImg/SizedImg'
import classNames from 'classnames'
import { TRANSPARENT_IMAGE } from '@consts/commonConsts'

type PostBigImageProps = {
  src: string
  likeCount: number
  commentCount: number
  remixCount: number
  dateStr: string
  showPopupFunc: () => void
}
export default function PostBigImage(props: PostBigImageProps) {
  return (
    <div className="w-310 lg:w-506 h-460 lg:mr-100">
      <div className="w-310 h-437 p-4 lg:w-506 lg:h-700 lg:p-8 mb-7 shrink-0 relative">
        <div
          style={{
            borderImage: 'linear-gradient(127deg, #b4b4b9, #3b3b40) 1',
          }}
          className="h-437 w-310 lg:w-506 lg:h-710 border-solid border-[1px] bg-[#E4E7EF] absolute top-0 left-0 shadow-[inset_-1px_-1px_1px_0px_#00000060] lg:shadow-[inset_-2px_-1px_4px_0px_#00000090]"
        ></div>
        <div className="w-302 h-400 lg:w-490 lg:h-654 m-4 lg:m-8 shadow-[0px_0px_1px_1px_#00000040] lg:shadow-[0px_0px_2px_2px_#00000040] absolute top-0 left-0"></div>

        <div className="w-full h-458 lg:h-730 custom-scroll-bar-horizontal p-1 bg-transparent overflow-x-auto overflow-y-hidden relative">
          <img
            alt=""
            className="w-full h-398 lg:h-650"
            src={props.src || TRANSPARENT_IMAGE}
          />
          <SizedImg src={props.src || TRANSPARENT_IMAGE} />
        </div>
        <div
          className={classNames(
            'text-[#434348] bg-[#E4E7EF] text-[12px] leading-[14px] lg:text-[18px] lg:leading-[22px] mx-5 lg:mx-14 flex justify-between',
            'absolute left-0 top-414 w-300 lg:w-478 lg:top-675'
          )}
        >
          <div onClick={props.showPopupFunc} className="flex">
            <div className="flex">
              <LikeIcon />
              <p className="ml-8 lg:ml-13">{props.likeCount}</p>
            </div>
            <div className="flex ml-16 lg:ml-28">
              <CommentIcon />
              <p className="ml-8 lg:ml-13">{props.commentCount}</p>
            </div>
            <div className="flex ml-16 lg:ml-28">
              <RemixIcon />
              <p className="ml-8 lg:ml-13">{props.remixCount}</p>
            </div>
          </div>
          <div onClick={props.showPopupFunc}>
            <p>{props.dateStr}</p>
          </div>
        </div>
        <div className="w-300 lg:w-490 h-0 border-t-[1px] my-4 lg:my-8 border-solid border-[#525358] absolute top-0 left-5 lg:left-8"></div>

        <div className="w-300 lg:w-490 h-0 border-b-[1px] my-4 lg:my-8 border-solid border-[#525358] absolute top-399 lg:top-654 left-5 lg:left-8"></div>

        <div className="w-0 h-400 lg:h-654 border-l-[1px] m-4 lg:m-8 border-solid border-[#525358] absolute top-0 left-0"></div>
        <div className="w-0 h-400 lg:h-654 border-l-[1px] m-4 lg:m-8 border-solid border-[#525358] absolute top-0 right-0"></div>
      </div>
    </div>
  )
}
