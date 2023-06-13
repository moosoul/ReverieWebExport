'use client'

import PostCard from '@components/PostCard/PostCard'
import { useInfiniteScroll } from '@hooks/useInfiniteScroll'
import profileService from '@services/profile.service'
import { PostInfoType } from '@services/types/profilePage.type'
import { useState } from 'react'

export default function PostCardList(props: {
  uid: string
  type: 'userid' | 'username'
}) {
  const [stories, setStories] = useState<PostInfoType[]>([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(0)
  const [isEnd, setIsEnd] = useState(false)
  useInfiniteScroll(() => {
    console.log('load more?')
    if (isEnd) {
      return
    }
    setLoading(true)

    profileService
      .getPostLists(props.uid, {
        page: page,
        page_size: 10,
      })
      .then((res) => {
        setStories((stories) => stories.concat(res.stories))
        setPage((page) => page + 1)
        if (res.stories.length < 5) {
          setIsEnd(true)
        }
      })
      .finally(() => {
        setLoading(false)
      })
  }, [stories])

  return (
    <>
      <div className="post-list px-32 flex justify-between flex-wrap lg:px-0 lg:w-[918px] m-auto">
        {stories.map((story) => (
          <PostCard
            key={story.id}
            id={story.id}
            title={story.title}
            src={story.preview_path}
            type={props.type}
          />
        ))}
      </div>
      {loading && <div className="text-center my-10">Loading...</div>}
      <div id="scrollElement"></div>
    </>
  )
}
