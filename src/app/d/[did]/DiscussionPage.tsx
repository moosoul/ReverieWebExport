'use client'

import { DiscussionPageProps } from "../../../services/types/discussionPage.type"
import CommentItem from './_components/CommentItem'
import moment from 'moment'

export default function DiscussionPage(props: DiscussionPageProps) {
  const { id, discussion, messages } = props
  console.log(discussion)
  const onFollow = () => {
    window.open(`com.reverie://discussion?id=${id}`)
  }
  return (
    <div id="discussion">
      {discussion && <div className="discussion-container">
        <div className="discussion-title goldman-bold">
          {discussion.title}
        </div>
        <div className="discussion-author">
          <img alt="" className="discussion-author-avatar" src={discussion.creator_profile.profile_url} />
          <div className="discussion-author-nickname goldman-bold">
            @{discussion.creator_profile.username}
          </div>
        </div>
        <div className="discussion-content poppins-regular">
          {discussion.caption}
        </div>
        {discussion.attached_assets && discussion.attached_assets.length > 0 && <div className="discussion-assets">
          <div className="discussion-assets-list">
            {discussion.attached_assets.map((item: any) => (<div className="discussion-assets-item" key={item.id}>
              <img alt="" className="discussion-assets-item-image" src={item.url} width={'100%'} height={'100%'}></img>
            </div>))}
          </div>
        </div>}
        <div className="discussion-linked-posts">
          <div className="discussion-linked-posts-header">
            <img alt="" src="@/assets/images/link.svg" width="24px" height="24px" />
            <div className="title poppins-semibold">Linked Posts</div>
          </div>
          {discussion.linked_posts && discussion.linked_posts.length > 0 && <div className="discussion-linked-posts-list">
            {discussion.linked_posts.map((item: any) => (<a key={item.id} className="discussion-linked-posts-item" href={'/d/' + item.id}>
              <img className="discussion-linked-posts-item-image" alt="" src={'https://media.revery.ai/' + item.preview_path}></img>
            </a>))}
          </div>}
        </div>
        <div className="discussion-created-at goldman-regular">
          {moment((discussion?.published_time || 0) * 1000).format('YY/MM/DD')}
        </div>
        <div className="discussion-follow">
          <div className="discussion-follow-button goldman-bold">
            Follow Discussion
          </div>
        </div>
      </div>}

      {messages && messages.length > 0 && <div className="comments-container">
        <div className="commnets-title goldman-bold">
          Comments
        </div>
        <div className="comments-list">
          {messages.map(item => <CommentItem key={item.id} discussionId={id} message={item} />)}
        </div>
      </div>}
    </div >
  )
}
