import DownLoadBar from '@components/DownLoadBar/DownLoadBar'
import PostCardList from '@components/PostCardList/PostCardList'
import { TRANSPARENT_IMAGE } from '@consts/commonConsts'
import { ProfileType } from '@services/types/profilePage.type'
type UserProfileProps = {
  profile: ProfileType
  uid: string
}

export default function UserProfile(props: UserProfileProps) {
  const { uid } = props

  const profile = props.profile

  return (
    <div>
      <DownLoadBar redirect={'com.reverie://user?id=' + uid} />
      <div className="w-full h-120 lg:h-205">
        <img
          src={profile.profile_background_url || TRANSPARENT_IMAGE}
          className="w-full h-120 lg:h-205 object-cover bg-[linear-gradient(360deg,#B2B6C2_-3.63%,#E3E4E8_27.65%,#E8E8E8_37.48%,#E3E4E8_55.8%,#CACCD2_78.59%,#B4B8C0_107.19%)]"
          alt="user profile background"
        />
      </div>
      <div className="profile-infos px-32 lg:px-0 lg:w-[1154px] m-auto">
        <div className="user-infos w-full flex justify-between lg:justify-start">
          <div className="circle-avatar w-120 lg:w-280 relative top-[-60px] lg:top-[-140px]">
            <div className="border-[2px] w-118 h-118 lg:w-280 lg:h-280 lg:border-[10px] border-solid border-[#cfd1d4] lg:border-[#E4E7EF] rounded-full">
              <img
                src={profile.profile_url}
                className="w-full h-full border-[3px] lg:border-0 border-solid border-[#E4E7EF] rounded-full"
                alt="user profile img"
              />
            </div>
            <div className="likes-and-remixes-number text-center mt-12 lg:mt-[32px] flex justify-between text-[#434348] text-[15px] leading-[18px] font-bold lg:text-[32px] lg:leading-[38px]">
              <div>
                <p>{profile.like_count}</p>
                <p className="text-[10px] leading-[12px] lg:text-[20px] lg:leading-[24px] font-normal">
                  Likes
                </p>
              </div>
              <div>
                <p>{profile.remix_count}</p>
                <p className="text-[10px] leading-[12px] lg:text-[20px] lg:leading-[24px] font-normal">
                  Remixes
                </p>
              </div>
            </div>
          </div>
          <div className="user-descriptions w-181 lg:w-753 lg:ml-120 lg:pt-60 pt-16">
            <p className="text-[16px] leading-[19px] lg:text-[48px] lg:leading-[57px] mb-12 lg:mb-[24px] tracking-[1px]">
              @{profile.username}
            </p>
            <div className="h-72 lg:h-90 overflow-y-auto custom-scroll-bar">
              <p className="text-[10px] leading-[12px] lg:text-[20px] lg:leading-[24px] w-159 lg:w-700">
                {profile.bio}
              </p>
            </div>
          </div>
        </div>
      </div>
      <PostCardList uid={uid} />
    </div>
  )
}
