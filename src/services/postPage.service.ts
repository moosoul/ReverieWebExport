import { get } from '@utils/request'
import { PostInfoType } from './types/postPage.type'

const getPostInfos = (postId: string) => {
  return get<PostInfoType>('/get_post', {
    id: postId,
  })
}

const postService = {
  getPostInfos,
}
export default postService
