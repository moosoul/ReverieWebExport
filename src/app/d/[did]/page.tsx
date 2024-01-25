import discussionService from '@services/discussion.service'
import { Metadata, ResolvingMetadata } from 'next'
import DiscussionPage from './DiscussionPage'
type DiscussionPageProps = {
  params: { did: string }
  // searchParams: { type: string }
}

export async function generateMetadata({
  params,
}: DiscussionPageProps): Promise<Metadata> {
  const { did } = params
  const { discussion } = await discussionService.getDiscussion(did)
  let story_preview = 'https://media.revery.ai/media_assets/' + did + '.jpg'

  let twitter_story_preview =
    'https://media.revery.ai/media_assets/' + did + '_twitter_cropped.jpg'
  const res = await fetch(twitter_story_preview, { method: 'HEAD' })
  if (!res.ok) {
    twitter_story_preview = story_preview
  }

  // const username = post.creator_profile.username
  return {}
  // return {
  //   openGraph: {
  //     title: username
  //       ? username + ' on Reverie'
  //       : 'Download Reverie - Edit looks, explore fashion, and more!',
  //     description: 'Edit looks, explore fashion, and more!',
  //     images: [story_preview],
  //     type: 'website',
  //   },

  //   twitter: {
  //     card: 'summary_large_image',
  //     title: username
  //       ? username + ' on Reverie' + ' on Reverie'
  //       : 'Download Reverie - Edit looks, explore fashion, and more!',
  //     description: 'Edit looks, explore fashion, and more!',
  //     images: [twitter_story_preview],
  //   },
  // }
}

export default async function PostPageWrapper(props: DiscussionPageProps) {
  const { did } = props.params

  const { discussion } = await discussionService.getDiscussion(did)
  const { messages } = await discussionService.getComments(did)
  console.log(messages)
  return (
    <>
      <DiscussionPage id={did} discussion={discussion} messages={messages}></DiscussionPage>
    </>
  )
}
