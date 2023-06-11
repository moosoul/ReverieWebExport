import profileService from '@services/profile.service'
import UserProfile from './UserProfile'
import Head from 'next/head'
import { Metadata } from 'next'
import UserDataTrackCom from './_components/UserDataTrackCom'
type UserProfileProps = {
  params: { uid: string }
}

export async function generateMetadata({
  params,
}: UserProfileProps): Promise<Metadata> {
  const { uid } = params

  const { profile } = await profileService.getProfile(uid)

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
  const { uid } = props.params

  const { profile } = await profileService.getProfile(uid)

  const username = profile.username
  const profile_preview = profile.profile_url

  return (
    <>
      <UserDataTrackCom uid={uid} />
      <UserProfile profile={profile} uid={uid} />
    </>
  )
}
