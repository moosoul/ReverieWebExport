type ProductInfo = {
  brand: string
  color: string
  descriptions: string
  discount_price: number
  final_price: number
  gender: string
  has_discount: boolean
  has_transparent_image: boolean
  id: string
  image_urls: {
    [key: string]: string
    product_image: string
  }
  in_stock: false
  materials: string
  name: string
  price: number
  site: string
  site_category: string[]
  site_display_name: string
  site_id: string
  tryon: {
    bottoms_sub_category: string
    category: string
    cls: number
    enabled: true
    is_croptop: false
    outerwear_splittable: false
  }
  url: string
}

export type PostType = {
  caption: any | null
  comment_count: number
  creator_profile: {
    profile_url: string
    user_id: string
    username: string
  }
  like_count: number
  preview_path: string
  products: {
    [key: string]: ProductInfo
  }
  published_time: number
  remix_count: number
  title: string
}

export type PostInfoType = {
  post: PostType
  success: true
}
