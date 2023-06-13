import { get } from '@utils/request'
import { PostListInfoType, ProfileInfoType } from './types/profilePage.type'

const getProfile = (userId: string) => {
  return get<ProfileInfoType>(`/get_profile`, {
    user_id: userId,
  })
}

const getPostLists = (
  userId: string,
  params: {
    page: number
    page_size: number
  } = {
    page: 0,
    page_size: 10,
  }
) => {
  return get<PostListInfoType>(`/get_posts`, {
    user_id: userId,
    page: params.page,
    page_size: params.page_size,
  })
}

const getUserIdByUserName = (username: string) => {
  return get<{ user_id: string }>(`/get_userid`, {
    username,
  })
}

const profileService = {
  getProfile,
  getPostLists,
  getUserIdByUserName,
}
export default profileService
