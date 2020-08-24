import React from 'react'
import { Flex, Box } from '@rebass/grid/emotion'

import Thumbnail from './Thumbnail'

export default function CardLatest() {
  return (
    <section>
      <h2>Latest Articles</h2>
      <Flex>
        <Box width={[1/3]}>
          <CardItem />
        </Box>
        <Box width={[1/3]}>
          <CardItemImageLeft />
        </Box>
        <Box width={[1/3]}>
          <CardItemImageRight />
        </Box>
      </Flex>
    </section>
  )
}

function CardItem() {
  return (
    <div css={{ border: '1px solid #ccc', padding: '15px', margin: '10px' }}>
      <Thumbnail />
      content title<br />
      content description<br />
      <div>Link</div>
    </div>
  )
}

function CardItemImageLeft() {
  return (
    <div css={{ border: '1px solid #ccc', padding: '15px', margin: '10px' }}>
      <Flex>
        <Box width={[1/3]}>
          <Thumbnail />
        </Box>
        <Box width={[3/3]}>
          content title<br />
          content description<br />
          <div>Link</div>
        </Box>
      </Flex>
    </div>
  )
}

function CardItemImageRight() {
  return (
    <div css={{ border: '1px solid #ccc', padding: '15px', margin: '10px' }}>
      <Flex>
        <Box width={[3/3]}>
          content title<br />
          content description<br />
          <div>Link</div>
        </Box>
        <Box width={[1/3]}>
          <Thumbnail />
        </Box>
      </Flex>
    </div>
  )
}