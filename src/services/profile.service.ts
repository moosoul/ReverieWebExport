import { get } from '@utils/request'
import { PostListInfoType, ProfileInfoType } from './types/profilePage.type'

const getProfile = (userId: string) => {
  return get<ProfileInfoType>(`/get_profile`, {
    user_id: userId,
  })
}

const getPostLists = (userId: string) => {
  return get<PostListInfoType>(`/get_posts`, {
    user_id: userId,
    page: 0,
  })
}

const profileService = {
  getProfile,
  getPostLists,
}
export default profileService