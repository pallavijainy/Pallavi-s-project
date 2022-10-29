
import { Avatar, Heading,  HStack,  Spacer,  VStack, WrapItem } from '@chakra-ui/react';
import './App.css';
import {CalendarIcon} from "@chakra-ui/icons"

import TodoList from './component/TodoList';

function App() {
  return (
   <>
   <WrapItem  bg={"teal.100"} >
    <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' size='2xl' mt={10} mx={10}/>
  </WrapItem>
   <VStack p={10} bg={"teal.100"}>
   <CalendarIcon w={10} h={10}/>
     <HStack>
   
   <Heading size='lg' fontSize={["20px","50px","100px"]} bgGradient='linear(to-r, blue.300, yellow.400, red.500)' bgClip={"text"}>
  To-do App
</Heading>



     </HStack>
  
<Spacer/>
   <TodoList/>
     
   </VStack>
   
   </>
  
  );
}

export default App;
