import profileService from '@services/profile.service'
import { Metadata } from 'next'
import UserDataTrackCom from '../../u/[uid]/_components/UserDataTrackCom'
import UserProfile from '../../u/[uid]/UserProfile'
type UserProfileProps = {
  params: { unid: string }
}

export async function generateMetadata({
  params,
}: UserProfileProps): Promise<Metadata> {
  const { unid } = params
  const { user_id } = await profileService.getUserIdByUserName(unid)
  const { profile } = await profileService.getProfile(user_id)

  const username = profile.username
  return {
    openGraph: {
      title: username
        ? username + ' on Reverie'
        : 'Download Reverie - Edit looks, explore fashion, and more!',
      description: 'Edit looks, explore fashion, and more!',
      images: [profile.profile_url],
      type: 'website',
    },

    twitter: {
      card: 'summary_large_image',
      title: username
        ? username + ' on Reverie'
        : 'Download Reverie - Edit looks, explore fashion, and more!',
      description: 'Edit looks, explore fashion, and more!',
      images: [profile.profile_url],
    },
  }
}

export default async function UserProfilePage(props: UserProfileProps) {
  const { unid } = props.params

  const { user_id } = await profileService.getUserIdByUserName(unid)

  const { profile } = await profileService.getProfile(user_id)

  return (
    <>
      <UserDataTrackCom uid={user_id} />
      <UserProfile type="username" profile={profile} uid={user_id} />
    </>
  )
}
