'use client'
import AppleLogoImg from './assets/AppleLogo.png'
import Image from 'next/image'
import DownloadBarStyle from './DownloadBar.module.css'
import classNames from 'classnames'

type DownLoadBarProps = {
  colored?: boolean
  redirect: string
}

export default function DownLoadBar(props: DownLoadBarProps) {
  const redirectToApp = () => {
    setTimeout(function () {
      window.location.href = 'https://apps.apple.com/app/reverie/id1535818149'
    }, 200)
    window.location.href = props.redirect
  }

  return (
    <div className="w-full h-55 lg:h-113">
      <div
        onClick={redirectToApp}
        // target="_blank"
        // href="https://apps.apple.com/app/reverie/id1535818149"
        className={classNames(
          'download-bar',
          'w-full h-55 lg:h-113 flex items-center px-32 justify-between',
          'fixed top-0 left-0 z-[100]',
          props.colored
            ? 'bg-[linear-gradient(351.59deg,#00e7ff_6.87%,#fd60ca_48.94%,#fdb600_84.35%)]'
            : 'bg-[#252525]'
        )}
      >
        <div
          style={{
            borderImage: 'linear-gradient(165deg, #b4b4b9, #3b3b40) 1',
          }}
          className="w-129 h-32 lg:w-167 lg:h-47 pt-5 pl-18 bg-[#E4E7EF] border-solid border-[1px] lg:border-[1px] flex shadow-[inset_-1px_-1px_1px_0px_#00000060] lg:shadow-[inset_-1px_-1px_1px_0px_#00000060]"
        >
          <Image
            className="w-16 h-19 lg:w-24 lg:h-28 shrink-0"
            src={AppleLogoImg}
            alt="Apple logo"
          />
          <div className="text-[10px] lg:text-[15px] lg:leading-[18px] ml-8 shrink-0 text-[#434348] leading-[12px]">
            <p>DOWNLOAD</p>
            <p className="text-[8px] leading-[8px] lg:text-[12px] lg:leading-[14px]">
              ON APP STORE
            </p>
          </div>
        </div>
        <p
          className={classNames(
            props.colored ? 'text-[#ffffff]' : DownloadBarStyle.colored_text,
            'text-[15px] leading-[18px] lg:text-[24px] lg:leading-[28px]'
          )}
        >
          REVERIE
        </p>
      </div>
    </div>
  )
}
