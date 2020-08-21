import React from 'react'
import withPage from '@lib/page/withPage'
import { Flex, Box } from '@rebass/grid/emotion'

import CardLatest from '../card'

function ChannelPage({ query }) {
  return (
    <Flex flexWrap="wrap">
      <Box width={[1]} mb={[30]}>
        <div>Channel Name : <span css={{color: 'red'}}>{query.channelName}</span></div>
        <div>Category Name : <span css={{color: 'blue'}}>{query.category}</span></div>
      </Box>
      <Box width={[1]}>
        <CardLatest />
      </Box>
    </Flex>
  )
}

ChannelPage.getInitialProps = async ({ query }) => {

  return { query }
}

export default withPage()(ChannelPage)