import { Button, Flex, Image, Input, Link, ListItem, Text, UnorderedList, Box } from "@chakra-ui/react";
import { ConnectButton } from "web3uikit";
import { useContext } from "react";
import { AuthenticationContext } from "../context/AuthenticationContext";

export const Sidebar = (props) => {

    const { isAuthenticated, handleName, setDisplayName, name, user } = useContext(AuthenticationContext);
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
            w={["15rem", "20rem"]}
            h="100vh"
            bg="#fff"
            borderRight="1px solid #e6e6e6"
            justify="space-between"
            p="1rem"
            position="sticky"
            top={0}
            {...props}
        >
            <Text
                as="h2"
                fontSize={["1.25rem", "2rem"]}
                fontWeight={700}
            >Team Youngster</Text>
            <Flex
                flexDirection="column"
                gridGap="0.75rem"
                justify="center"
                align="center"
                bg="#1E90FF"
                borderRadius="10%"
                border="none"
                p="1rem"
            >
                <Image
                    src="/images/avatar.jpeg"
                    alt="avatar"
                    borderRadius="50%"
                    w="70%"
                />
                <Text
                    as="h4"
                    color="white"
                    fontWeight={600}
                    fontSize="1.25rem"
                >
                    Welcome{
                        isAuthenticated && name ? ` ${getUser().name}` : ""
                    }
                </Text>
                {
                    (isAuthenticated && !name) ? (
                        <Flex
                            flexDirection="column"
                            justify="center"
                            align="center"
                            rowGap={0.5}
                        >
                            <Input type="text" placeholder="Enter Your Name" onChange={(e)=>{
                                setDisplayName(e.target.value);
                            }} />
                            <Button onClick={handleName}>Set Name</Button>
                        </Flex>
                    ): null
                }
                <ConnectButton />
            </Flex>
            <Flex
                flexDirection="column"
                justify="flex-start"
                align="flex-start"
                fontSize={["1rem", "1.25rem"]}
                mb={6}
            >
                <UnorderedList
                    listStyleType="none"
                    w="full"
                    p={0}
                    spacing={6}
                >
                    <ListItem
                    >
                        <Link
                            href="/"
                            textDecoration="none"
                            _hover={{
                                textDecoration: "none",
                            }}
                        >
                            <Flex
                                flexDirection="row"
                                justify="flex-start"
                                align="center"
                                gridGap={6}
                            >
                                <i className="fa-solid fa-house-chimney"></i>{" "}
                                <Text>
                                    Home
                                </Text>
                            </Flex>
                        </Link>
                    </ListItem>
                    <ListItem display={getUser().role==="admin"?"none":"block"}>
                        <Link
                            href="/orders"
                            textDecoration="none"
                            _hover={{
                                textDecoration: "none",
                            }}
                        >
                            <Flex
                                flexDirection="row"
                                justify="flex-start"
                                align="center"
                                gridGap={6}
                            >
                                <i className="fa-solid fa-credit-card"></i>{" "}
                                <Text>
                                    Orders
                                </Text>
                            </Flex>
                        </Link>
                    </ListItem>
                    <ListItem display={getUser().role==="admin"?"none":"block"}>
                        <Link
                            href="/cart"
                            textDecoration="none"
                            _hover={{
                                textDecoration: "none",
                            }}
                        >
                            <Flex
                                flexDirection="row"
                                justify="flex-start"
                                align="center"
                                gridGap={6}
                            >
                                <i className="fa-solid fa-cart-shopping"></i>{" "}
                                <Text>
                                    Cart
                                </Text>
                            </Flex>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link
                            href="/support"
                            textDecoration="none"
                            _hover={{
                                textDecoration: "none",
                            }}
                        >
                            <Flex
                                flexDirection="row"
                                justify="flex-start"
                                align="center"
                                gridGap={6}
                            >
                                <i className="fa-solid fa-circle-info"></i>{" "}
                                <Text>
                                    Support
                                </Text>
                            </Flex>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link
                            href="/settings"
                            textDecoration="none"
                            _hover={{
                                textDecoration: "none",
                            }}
                        >
                            <Flex
                                flexDirection="row"
                                justify="flex-start"
                                align="center"
                                gridGap={6}
                            >
                                <i className="fa-solid fa-cog"></i>{" "}
                                <Text>
                                    Settings
                                </Text>
                            </Flex>
                        </Link>
                    </ListItem>
                </UnorderedList>
            </Flex>
        </Flex>
    );
}
