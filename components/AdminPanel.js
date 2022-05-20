import { Button, Flex, Image, Input, Link, ListItem, Text, UnorderedList, Box } from "@chakra-ui/react";
import { ConnectButton } from "web3uikit";
import { useContext } from "react";
import { AuthenticationContext } from "../context/AuthenticationContext";

export const AdminPanel = (props) => {

    const { name, user } = useContext(AuthenticationContext);
    const getUser = () => {
        return {
            name: name,
            avatar: "https://i.pravatar.cc/300",
            role: user?.get("role")
        }
    }
    return (
        <Flex
            flexDirection="column"
            w="full"
            bg="#fff"
            p="1rem"
        >
            <Flex
                flexDirection="row"
                overflowX="auto"
                columnGap={4}
                p={2}
            >
            <Button>Add Categories</Button>
            <Button>Add Item</Button>
            <Button>Change Company Details</Button>
            </Flex>

        </Flex>
    );
}
