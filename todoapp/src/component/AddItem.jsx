import { Text, HStack, VStack, IconButton, Spacer } from "@chakra-ui/react";
import React from "react";
import { DeleteIcon, CloseIcon, CheckIcon } from "@chakra-ui/icons";

export default function AddItem({ title, id, handleDelete, status,handleToggle,c }) {
  return (
    <>
      <VStack bg={"orange.100"} alignItems={"stretch"} w={"40%"} p={3} >
        <HStack px={2}>
          <Text as="i" fontSize={"lg"}>
            {title}
          </Text>

          <Spacer/>
          <IconButton
            icon={<DeleteIcon w={6} h={6} onClick={() => handleDelete(id)} />}
            isRound={"true"}
          />

          {status ? (
            <IconButton icon={<CheckIcon w={6} h={6} onClick={()=>handleToggle(id)}/>} isRound={"true"} />
          ) : (
            <IconButton icon={<CloseIcon w={6} h={6} onClick={()=>handleToggle(id)} />} isRound={"true"} />
          )}
        </HStack>

      </VStack>
    </>
  );
}
