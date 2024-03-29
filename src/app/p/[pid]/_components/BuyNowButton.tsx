export default function BuyNowButton(props: { url: string }) {
  return (
    <div
      onClick={() => {
        window.open(props.url, '_blank')
      }}
      style={{
        borderImage: 'linear-gradient(to bottom, #b4b4b9, #3b3b40) 1',
      }}
      className="w-95 h-24 lg:w-198 lg:h-50 hover:opacity-80 active:opacity-80 cursor-pointer border-solid border-[1px] bg-[#E4E7EF] flex justify-center items-center"
    >
      <p className="text-[10px] leading-[12px] lg:text-[20px] lg:leading-[28px]">
        BUY NOW
      </p>
    </div>
  )
}
