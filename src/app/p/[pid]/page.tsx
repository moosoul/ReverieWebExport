import DownLoadBar from '@components/DownLoadBar/DownLoadBar'
import BackButton from '@components/BackButton/BackButton'
import PostBigImage from '@components/PostBigImage/PostBigImage'
import postService from '@services/postPage.service'
import withS3Prefix from '@utils/withS3Prefix'
import dayjs from 'dayjs'
import ProductImage from './_components/ProductImage'
import Link from 'next/link'
import Head from 'next/head'
import PostPage from './PostPage'
type PostPageProps = {
  params: { pid: string }
}

export default async function PostPageWrapper(props: PostPageProps) {
  const { pid } = props.params
  const { post } = await postService.getPostInfos(pid)

  let story_preview = 'https://media.revery.ai/media_assets/' + pid + '.jpg'
  let twitter_story_preview =
    'https://media.revery.ai/media_assets/' + pid + '_twitter_cropped.jpg'
  let username = ''
  const res = await fetch(twitter_story_preview, { method: 'HEAD' })
  if (!res.ok) {
    twitter_story_preview = story_preview
  }
  await fetch('https://stylespace.revery.ai/get_story_by_id?id=' + pid, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((body) => {
      if (body.success) {
        username = body.published_story.creator_profile.username
      }
    })

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
        <meta property="og:image" content={story_preview} />
        <meta property="og:image:secure_url" content={story_preview} />
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
        <meta content={twitter_story_preview} property="twitter:image" />
        <meta property="og:type" content="website" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <PostPage pid={pid} post={post} />
    </>
  )
}
