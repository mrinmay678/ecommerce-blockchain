import { Button, Flex, Image, Input, Text } from "@chakra-ui/react";
import { ConnectButton } from "web3uikit";
import { useContext } from "react";
import { AuthenticationContext } from "../context/AuthenticationContext";

export const Sidebar = () => {

    const { isAuthenticated, handleName, user, setName, name } = useContext(AuthenticationContext);
    const getUser = () => {
        return {
            name: name,
            avatar: "https://i.pravatar.cc/300"
        }
    }
    return (
        <Flex
            flexDirection="column"
            w={["15rem", "20rem"]}
            h="full"
            bg="#fff"
            borderRight="1px solid #e6e6e6"
        >
            <Flex
                flexDirection="column"
                gridGap="0.75rem"
                justify="center"
                align="center"
                bg="#1E90FF"
                borderRadius="10%"
                border="none"
                m="1rem"
                p="1rem"
            >
                <Image
                    src="/images/avatar.jpeg"
                    alt="avatar"
                    borderRadius="50%"
                />
                <Text as="h4">
                    Welcome{
                        isAuthenticated ? `, ${getUser().name}` : ""
                    }
                </Text>
                {
                    isAuthenticated && user.name!=null? (
                        <Flex
                            flexDirection="column"
                            justify="center"
                            align="center"
                            rowGap={0.5}
                        >
                            <Input type="text" placeholder="Enter Your Name" onChange={(e)=>{
                                setName(e.target.value);
                            }} />
                            <Button onClick={handleName}>Set Name</Button>
                        </Flex>
                    ): null
                }
                <ConnectButton />
            </Flex>
        </Flex>
    );
}
