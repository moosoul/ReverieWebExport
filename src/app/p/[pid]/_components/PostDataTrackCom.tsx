'use client'

import mixpanel from 'mixpanel-browser'
import { useEffect } from 'react'

export default function PostDataTrackCom(props: { pid: string }) {
  useEffect(() => {
    mixpanel.init('44e285e098478988c9adcc9237fbbce6', { debug: true })
    mixpanel.track('Reverie Page View', {
      post_id: {
        post_id: props.pid,
      },
    })
  }, [props.pid])

  return <></>
}
