import DownLoadBar from '@components/DownLoadBar/DownLoadBar'
import Image from 'next/image'
import testImg from './tttt.png'
import PostCard from '@components/PostCard/PostCard'
type UserProfileProps = {
  params: { uid: string }
}

export default function UserProfile(props: UserProfileProps) {
  const { uid } = props.params

  return (
    <div>
      <DownLoadBar />
      <div className="w-full h-120px">
        <Image src={testImg} className="w-full h-full" alt="user profile img" />
      </div>
      <div className="profile-infos px-32">
        <div className="user-infos w-full flex justify-between">
          <div className="circle-avatar w-120 relative top-[-60px]">
            <div className="border-[2px] border-solid border-[#cfd1d4] rounded-full">
              <Image
                src={testImg}
                className="w-116 h-116 border-[3px] border-solid border-[#E4E7EF] rounded-full"
                alt="user profile img"
              />
            </div>
            <div className="likes-and-remixes-number mt-12 flex justify-between text-[#434348] text-[15px] leading-[18px] font-bold">
              <div>
                <p>300</p>
                <p className="text-[10px] leading-[12px] font-normal">Likes</p>
              </div>
              <div>
                <p>300</p>
                <p className="text-[10px] leading-[12px] font-normal">
                  Remixes
                </p>
              </div>
            </div>
          </div>
          <div className="user-descriptions w-181 pt-16">
            <p className="text-[16px] leading-[19px] mb-12 tracking-[1px]">
              @samkelisiwe_ms_
            </p>
            <div className="h-72 overflow-y-scroll custom-scroll-bar">
              <p className="text-[10px] leading-[12px] w-159">
                high fashion, art and wine lover. aquarius. mediterranean. brand
                manager. i write about high-end eyewear. Lorem Ipsum dolor sit
                amet, pero se pa sur high fashion, art and wine lover. aquarius.
                mediterranean. brand manager. i write about high-end eyewear.
                Lorem Ipsum dolor sit amet, pero se pa sur
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="post-list px-32 flex justify-between flex-wrap">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  )
}
