import { Flex } from "@chakra-ui/react";
import { Sidebar } from "../components/Sidebar";

export default function Cart() {
  return (
    <Flex flexDirection="column" w="full" h="full" bg="#fff">
      <Sidebar />
      <div>Cart</div>
    </Flex>
  );
}
