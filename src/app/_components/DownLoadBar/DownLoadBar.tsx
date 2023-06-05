import AppleLogoImg from './assets/AppleLogo.png'
import Image from 'next/image'
import DownloadBarStyle from './DownloadBar.module.css'
import classNames from 'classnames'

type DownLoadBarProps = {
  colored?: boolean
}

export default function DownLoadBar(props: DownLoadBarProps) {
  return (
    <a
      target="_blank"
      href="https://apps.apple.com/app/reverie/id1535818149"
      className={classNames(
        'download-bar',
        'w-full h-55 flex items-center px-32 justify-between',
        props.colored
          ? 'bg-[linear-gradient(351.59deg,#00e7ff_6.87%,#fd60ca_48.94%,#fdb600_84.35%)]'
          : 'bg-[#252525]'
      )}
    >
      <div className="w-129 h-32 pt-5 pl-18 bg-[#E4E7EF] border-[1px_solid_#000000] flex">
        <Image
          className="w-16 h-19 shrink-0"
          src={AppleLogoImg}
          alt="Apple logo"
        />
        <div className="text-[10px] ml-8 shrink-0 text-[#434348] leading-[12px]">
          <p>DOWNLOAD</p>
          <p className="text-[8px]">ON APP STORE</p>
        </div>
      </div>
      <p
        className={classNames(
          props.colored ? 'text-[#ffffff]' : DownloadBarStyle.colored_text,
          'text-[15px] leading-[18px]'
        )}
      >
        REVERIE
      </p>
    </a>
  )
}
