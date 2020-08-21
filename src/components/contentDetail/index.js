import React from 'react'
import withPage from '@lib/page/withPage'

function ContentDetail({ query }) {
  return <div>Content Id : {query.id}</div>
}

ContentDetail.getInitialProps = async ({ query }) => {

  return { query }
}

export default withPage()(ContentDetail)