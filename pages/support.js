import { CloseButton, Flex, Button } from "@chakra-ui/react";
import { Sidebar } from "../components/Sidebar";
import { useState } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function Support (){
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Flex
      flexDirection={["column", "row"]}
      w="full"
      h="full"
      bg="#fff"
    >
      <Sidebar display="none" />
        {
          isOpen ? 
          <CloseButton  />
          :
          <Button bg="#fff">
            <HamburgerIcon />
          </Button>
        }
      <div>Support</div>
    </Flex>
  )
}
