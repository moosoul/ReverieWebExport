import DownLoadBar from '@components/DownLoadBar/DownLoadBar'
import PostCard from '@components/PostCard/PostCard'
import profileService from '@services/profile.service'
type UserProfileProps = {
  params: { uid: string }
}

export default async function UserProfile(props: UserProfileProps) {
  const { uid } = props.params

  const [{ profile }, { stories }] = await Promise.all([
    profileService.getProfile(uid),
    profileService.getPostLists(uid),
  ])
  return (
    <div>
      <DownLoadBar />
      <div className="w-full h-120px">
        <img
          src={profile.profile_background_url}
          className="w-full h-full"
          alt="user profile background"
        />
      </div>
      <div className="profile-infos px-32">
        <div className="user-infos w-full flex justify-between">
          <div className="circle-avatar w-120 relative top-[-60px]">
            <div className="border-[2px] border-solid border-[#cfd1d4] rounded-full">
              <img
                src={profile.profile_url}
                className="w-116 h-116 border-[3px] border-solid border-[#E4E7EF] rounded-full"
                alt="user profile img"
              />
            </div>
            <div className="likes-and-remixes-number mt-12 flex justify-between text-[#434348] text-[15px] leading-[18px] font-bold">
              <div>
                <p>{profile.like_count}</p>
                <p className="text-[10px] leading-[12px] font-normal">Likes</p>
              </div>
              <div>
                <p>{profile.remix_count}</p>
                <p className="text-[10px] leading-[12px] font-normal">
                  Remixes
                </p>
              </div>
            </div>
          </div>
          <div className="user-descriptions w-181 pt-16">
            <p className="text-[16px] leading-[19px] mb-12 tracking-[1px]">
              @{profile.username}
            </p>
            <div className="h-72 overflow-y-auto custom-scroll-bar">
              <p className="text-[10px] leading-[12px] w-159">{profile.bio}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="post-list px-32 flex justify-between flex-wrap">
        {stories.map((story) => (
          <PostCard
            key={story.id}
            id={story.id}
            title={story.title}
            src={story.preview_path}
          />
        ))}
      </div>
    </div>
  )
}
