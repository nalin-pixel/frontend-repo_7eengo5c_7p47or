import React from 'react'

export default function SEO({ title = 'MAS Mail & Print Center', description = 'Your local partner for mail, print, shipping, and business services in Rockford, IL.', keywords = 'shipping, printing, mailbox rental, notary, Rockford IL' }) {
  React.useEffect(() => {
    if (title) document.title = title
    const descTag = document.querySelector('meta[name="description"]') || (() => {
      const m = document.createElement('meta');
      m.setAttribute('name', 'description');
      document.head.appendChild(m); return m
    })()
    descTag.setAttribute('content', description)

    const kwTag = document.querySelector('meta[name="keywords"]') || (() => {
      const m = document.createElement('meta');
      m.setAttribute('name', 'keywords');
      document.head.appendChild(m); return m
    })()
    kwTag.setAttribute('content', keywords)
  }, [title, description, keywords])

  return null
}
