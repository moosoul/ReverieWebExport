import profileService from '@services/profile.service'
import UserProfile from './UserProfile'
import Head from 'next/head'
type UserProfileProps = {
  params: { uid: string }
}

export default async function UserProfilePage(props: UserProfileProps) {
  const { uid } = props.params

  const { profile } = await profileService.getProfile(uid)

  const username = profile.username
  const profile_preview = profile.profile_url

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {username != '' ? (
          <meta property="og:title" content={username + ' on Reverie'} />
        ) : (
          <meta
            property="og:title"
            content="Download Reverie - Edit looks, explore fashion, and more!"
          />
        )}
        <meta
          property="og:description"
          content="Edit looks, explore fashion, and more!"
        />
        <meta property="og:image" content={profile_preview} />
        <meta property="og:image:secure_url" content={profile_preview} />
        <meta content="summary_large_image" name="twitter:card" />
        {username != '' ? (
          <meta property="twitter:title" content={username + ' on Reverie'} />
        ) : (
          <meta
            content="Download Reverie - Edit looks, explore fashion, and more!"
            property="twitter:title"
          />
        )}
        <meta
          content="Edit looks, explore fashion, and more!"
          property="twitter:description"
        />
        <meta content={profile_preview} property="twitter:image" />
        <meta property="og:type" content="website" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <UserProfile profile={profile} uid={uid} />
    </>
  )
}
