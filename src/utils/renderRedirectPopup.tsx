import AppleLogoImg from './assets/AppleLogo.png'

export default function renderPopup(
  show: boolean,
  closePopup: () => void,
  redirect: () => void
) {
  if (show) {
    return (
      <div
        onClick={() => closePopup()}
        key={'popupCover'}
        className={'popupCover'}
      >
        <div
          onClick={(e) => {
            e.stopPropagation()
          }}
          key={'popup'}
          className={'popup'}
        >
          <div className={'popupTitle'}>Reverie</div>
          <div className={'popupText'}>
            Download Reverie to edit looks, explore fashion, and more!
          </div>
          <div style={{ cursor: 'pointer' }}>
            <div
              style={{
                borderRadius: '6px',
              }}
              onClick={() => redirect()}
              className="w-129 h-32 lg:w-167 lg:h-47 rounded-[4px] pt-5 pl-18 bg-[#E4E7EF] flex shadow-[inset_-1px_-1px_1px_0px_#00000060] lg:shadow-[inset_-1px_-1px_1px_0px_#00000060]"
            >
              <img
                className="w-16 h-19 lg:w-24 lg:h-28 shrink-0"
                src={AppleLogoImg.src}
                alt="Apple logo"
              />
              <div className="text-[10px] text-center rounded-[6px] lg:text-[15px] lg:leading-[18px] ml-8 shrink-0 text-[#434348] leading-[12px]">
                <p>DOWNLOAD</p>
                <p className="text-[17px] lg:text-[14px] lg:leading-[14px]">
                  Open In App
                </p>
              </div>
            </div>
          </div>
          {/*</a>*/}
          <div onClick={() => closePopup()} className="popupClose">
            &times;
          </div>
        </div>
      </div>
    )
  }
  return null
}
