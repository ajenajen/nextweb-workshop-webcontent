import React from 'react'
import withPage from '@lib/page/withPage'
import { Flex, Box } from '@rebass/grid/emotion'
import {
  Gallery,
  Comment,
  RelatedTag,
  ShareBox
} from './components'

function ContentDetail({ query }) {
  return (
    <Flex flexWrap='wrap'>
      <Box width={1}>
        <div>Content Id : {query.id}</div>
        <br />
      </Box>
      <Flex flexWrap='wrap' width={1}>
        <Box width={1}>
          <div css={{ fontSize: '0.7em' }}>Writer / Date</div>
          <div css={{ minHeight: '30vh', background: '#eee', margin: '15px 0' }}>
            Content
          </div>
        </Box>
      </Flex>
      <Flex flexWrap='wrap' width={1} mb={30}>
        <Box width={1}>
          <Gallery />
          <Comment />
          <RelatedTag />
          <ShareBox />
        </Box>
      </Flex>
    </Flex>
  )
  
}

ContentDetail.getInitialProps = async ({ query }) => {

  return { query }
}

export default withPage()(ContentDetail)