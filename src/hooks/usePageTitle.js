import { useEffect } from 'react'

/**
 * Sets the browser tab title as `Novallect - <title>` while a page is mounted.
 * Pass nothing on the home/landing page to show just `Novallect`.
 */
export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `Novallect - ${title}` : 'Novallect'
  }, [title])
}
