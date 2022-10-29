
import { Box, HStack, IconButton, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import {AddIcon} from '@chakra-ui/icons'

export default function Todo({handleClick}) {

    const [text,setText]=useState("")

const handleChange=(e)=>{
setText(e.target.value)
}

const onClick=()=>{
    handleClick(text)
    setText("")
}

  return (
    <>
    
   <Box>

<HStack>
<Input placeholder='Add todo' variant='filled' value={text} onChange={handleChange} p={4} w={"300px"} fontSize={20}/>
<IconButton icon={<AddIcon onClick={onClick}/>} bg={"black"} color={"white"} isRound={"true"} />
</HStack>



   </Box>
    </>
  )
}
