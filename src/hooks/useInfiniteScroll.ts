import { useRef, useEffect } from 'react'
import { useMemoizedFn } from 'ahooks'
export function useInfiniteScroll(callback: () => void, deps: any[] = []) {
  const callbackMemo = useMemoizedFn(callback)

  useEffect(() => {
    const currentObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          callbackMemo()
        }
      },
      { rootMargin: '0px 0px 100% 0px' }
    )
    currentObserver.observe(window.document.querySelector('#scrollElement')!)
    console.log(currentObserver.root)
    return () => currentObserver.disconnect()
  }, deps)
}
