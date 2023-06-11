'use client'

import mixpanel from 'mixpanel-browser'
import { useEffect } from 'react'

export default function PostDataTrackCom(props: { uid: string }) {
  useEffect(() => {
    mixpanel.init('44e285e098478988c9adcc9237fbbce6', { debug: true })
    mixpanel.track('Reverie User Profile View', {
      user_id: {
        user_id: props.uid,
      },
    })
  }, [props.uid])

  return <></>
}
