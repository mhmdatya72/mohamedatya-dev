import React from 'react'

// Renders structured data as JSON-LD (server-rendered so crawlers see it without running JavaScript).
const JsonLd = ({ data }) => (
  <>
    {data.map((item, index) => (
      <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(item).replace(/</g, '\u003c') }} />
    ))}
  </>
)

export default JsonLd
