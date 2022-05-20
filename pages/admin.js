import { Flex } from "@chakra-ui/react";
import { Sidebar } from "../components/Sidebar";
import { AuthenticationContext } from "../context/AuthenticationContext";
import { useContext } from "react";
import { AdminPanel } from "../components/AdminPanel";

export default function Admin() {
    const { isAuthenticated, handleName, setDisplayName, name, user } = useContext(AuthenticationContext);
    return (
        <Flex flexDirection={["column", "row"]} w="full" h="full" bg="#fff">
        <Sidebar />
        <AdminPanel />
        </Flex>
    );
}

