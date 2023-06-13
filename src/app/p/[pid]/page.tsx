import postService from '@services/postPage.service'
import { Metadata, ResolvingMetadata } from 'next'
import PostPage from './PostPage'
import PostDataTrackCom from './_components/PostDataTrackCom'
type PostPageProps = {
  params: { pid: string }
  searchParams: { type: string }
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { pid } = params
  const { post } = await postService.getPostInfos(pid)
  let story_preview = 'https://media.revery.ai/media_assets/' + pid + '.jpg'

  let twitter_story_preview =
    'https://media.revery.ai/media_assets/' + pid + '_twitter_cropped.jpg'
  const res = await fetch(twitter_story_preview, { method: 'HEAD' })
  if (!res.ok) {
    twitter_story_preview = story_preview
  }

  const username = post.creator_profile.username
  return {
    openGraph: {
      title: username
        ? username + ' on Reverie'
        : 'Download Reverie - Edit looks, explore fashion, and more!',
      description: 'Edit looks, explore fashion, and more!',
      images: [story_preview],
      type: 'website',
    },

    twitter: {
      card: 'summary_large_image',
      title: username
        ? username + ' on Reverie' + ' on Reverie'
        : 'Download Reverie - Edit looks, explore fashion, and more!',
      description: 'Edit looks, explore fashion, and more!',
      images: [twitter_story_preview],
    },
  }
}

export default async function PostPageWrapper(props: PostPageProps) {
  const { pid } = props.params

  const { post } = await postService.getPostInfos(pid)
  return (
    <>
      <PostDataTrackCom pid={pid} />
      <PostPage
        pid={pid}
        post={post}
        type={props.searchParams?.type || 'userid'}
      />
    </>
  )
}
