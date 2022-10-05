import { Box, Heading, IconButton } from '@chakra-ui/react'
import React from 'react'
import {AddIcon} from "@chakra-ui/icons"

export default function Counter() {
  return (
    <Box bg='tomato' w='100%' p={4} color='white'>
  
  <Heading>Counter</Heading>

<IconButton icon={<AddIcon/>}/>


</Box>
  )
}
