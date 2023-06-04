export type ProfileInfoType = {
  profile: {
    bio: string
    created_date: number
    email: string
    followers_count: number
    following_count: number
    gender: string
    id: string
    like_count: number
    name: string
    phone_number: null
    posts_count: number
    profile_background_url: string
    profile_url: string
    remix_count: number
    user_deleted: boolean
    username: string
  }
  success: true
}

export type PostListInfoType = {
  stories: {
    id: string
    preview_path: string
    title: string
  }[]
}
