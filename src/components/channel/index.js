import React from 'react'
import withPage from '@lib/page/withPage'

function Channel({ query }) {
  return <div>Channel Name : {query.channel}, {query.category}</div>
}

Channel.getInitialProps = async ({ query }) => {

  return { query }
}

export default withPage()(Channel)