import {createContext, useState, useEffect} from 'react';
import { useMoralis } from 'react-moralis';

export const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {

    const [username, setUsername] = useState('');
    const [name, setName] = useState(null);

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
    }, [isAuthenticated, user, username]);

    const handleName = () => {
        if(isAuthenticated && name){
            user.set("name", name);
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
            user,
            setName,
            name
        }}>
            {children}
        </AuthenticationContext.Provider>
    )
}