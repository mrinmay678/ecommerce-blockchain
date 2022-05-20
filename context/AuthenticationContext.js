import {createContext, useState, useEffect} from 'react';
import { useMoralis } from 'react-moralis';

export const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {

    const [username, setUsername] = useState('');
    const [name, setName] = useState(null);
    const [displayName, setDisplayName] = useState(null);

    const {
        authenticate,
        isAuthenticated,
        enableWeb3,
        Moralis,
        user,
        isWebEnabled,
    } = useMoralis();

    useEffect(() => {
        (
            async () => {
                if (isAuthenticated) {
                    const name = await user?.get("name");
                    const username = await user?.get("username");
                    setUsername(username);
                    setName(name);
                }
            }
        )();
    }, [isAuthenticated, user]);

    const handleName = () => {
        setName(displayName);
        console.log(displayName);
        if(isAuthenticated && displayName){
            user.set("name", displayName);
            user.save();
        }
        else {
            alert("Please Enter Name");
        }
    }

    return (
        <AuthenticationContext.Provider value={{
            isAuthenticated,
            handleName,
            setDisplayName,
            name,
            user
        }}>
            {children}
        </AuthenticationContext.Provider>
    )
}