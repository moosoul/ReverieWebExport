import { useState } from 'react'
import { CommentItemProps, Message } from '../../../../services/types/discussionPage.type'
import moment from 'moment'
import { get } from '@utils/request'

export default function CommentItem(props: CommentItemProps) {

  const { discussionId, message } = props

  const [expanded, setExpanded] = useState(false)
  const [replies, setReplies] = useState<Array<Message>>([])
  const [requesting, setRequesting] = useState(false);


  const onExpand = async () => {
    if (requesting) return;
    if (props.message.reply_count === 0) return;
    setRequesting(true)
    try {
      const response = await get<{ success: boolean, messages: Array<Message> }>('/get_comments', {
        discussion_id: props.discussionId,
        page: 0,
        page_size: 10,
        reply_to_message_id: props.message.id
      })
      setExpanded(true)
      if (response.success) {
        setReplies(response.messages)
      }
    } catch (e) {
      console.log(e)
    }
    setRequesting(false)

  }

  const onCollapse = async () => {
    setExpanded(false)
  }


  return (
    <div className="comments-item">
      <div className="comments-item-main">
        <div className="comments-item-left">
          <img alt='' className="comments-item-left-avatar" src={message.creator_profile.profile_url} />
          <div v-if="expanded" className="comments-item-left-line"></div>
        </div>
        <div className="comments-item-content">
          <div className="nickname-wrapper">
            <div className="nickname-wrapper-left">
              <div className="nickname goldman-bold">@{message.creator_profile.username}</div>
              <div className="ago goldman-regular">{moment(message.timestamp * 1000).format('HH:mm:ss')}</div>
            </div>
            <div className="nickname-wrapper-right">
              <img alt='' className="like-icon" src="@/assets/images/like.svg" width="13px" />
              <div className="like-count goldman-regular">{message.like_count}</div>
            </div>
          </div>
          <div className="content-wrapper poppins-regular">
            {message.text}
          </div>
          {message.attached_assets && message.attached_assets.length > 0 ? <div className="comment-assets">
            <div className="comment-assets-list">
              {message.attached_assets.map((asset: any) => (<div key={asset.url} className='comment-assets-item'><img alt="" className="comment-assets-item-image" src={asset.url} /></div>))}
            </div>
          </div> : null}
          <div className="replies-wrapper">
            {expanded ? <div className="replies-collapse-button goldman-bold" onClick={onCollapse}>Collapse Replies</div> :
              <div className={`replies-expand-button goldman-bold ${message.reply_count === 0 ? 'no-reply' : ''}`} onClick={onExpand}>
                {`${message.reply_count} Replies`}
              </div>}
          </div>
        </div>
      </div>
      {expanded && <div className="comments-item-reply expanded">
        {replies.map(message => (
          <div className="reply-item" key={message.id}>
            <CommentItem discussionId={discussionId} message={message} />
          </div>
        ))}
      </div>}
    </div >

  )
}