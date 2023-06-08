import BackIcon from './assets/backIcon.svg'
import Image from 'next/image'
export default function BackButton(props: { onClick?: () => void }) {
  return (
    <div
      onClick={props.onClick}
      style={{
        borderImage: 'linear-gradient(to bottom, #b4b4b9, #3b3b40) 1',
      }}
      className="w-24 h-24 lg:w-48 lg:h-48 lg:border-[1px] hover:opacity-80 active:opacity-80 cursor-pointer border-solid border-[1px] bg-[#E4E7EF] flex justify-center items-center shadow-[inset_-1px_-1px_1px_0px_#00000060] lg:shadow-[inset_-1px_-1px_1px_0px_#00000060]"
    >
      <Image alt="" className="w-7 lg:w-14" src={BackIcon} />
    </div>
  )
}
