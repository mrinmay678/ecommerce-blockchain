import { Flex } from "@chakra-ui/react";
import { Sidebar } from "../components/Sidebar";

export default function Settings (){
  return (
    <Flex
      flexDirection="column"
      w="full"
      h="full"
      bg="#fff"
    >
      <Sidebar />
      <div>Settings</div>
    </Flex>
  )
}
