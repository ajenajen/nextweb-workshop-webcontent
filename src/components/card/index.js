import React from 'react'

export default function CardLatest() {
  return (
    <section>
      <h2>Latest Articles</h2>
      <CardItem />
    </section>
  )
}

function CardItem() {
  return (
    <div css={{ border: '1px solid #ccc', padding: '15px', margin: '10px' }}>
      Image<br />
      content title<br />
      content description<br />
    </div>
  )
}