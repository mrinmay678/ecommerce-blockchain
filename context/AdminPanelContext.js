import {createContext, useState, useEffect} from 'react';
import { useMoralis, useMoralisQuery, useNewMoralisObject } from 'react-moralis';
import { useContext } from "react";
import { AuthenticationContext } from "../context/AuthenticationContext";

export const AdminPanelContext = createContext();

export const AdminPanelProvider = ({ children }) => {

    const [categories, setCategories] = useState([]);
    const [items, setItems] = useState([]);
    const { user } = useContext(AuthenticationContext);

    const itemsFetch = useMoralisQuery(
        "Items",
        (query) => query.equalTo("seller", user.objectId),
        [],
        { autoFetch: false }
    );
    const categoriesFetch = useMoralisQuery(
        "Categories",
        (query) => query.equalTo("seller", user.objectId),
        [],
        { autoFetch: false }
    );

    useEffect(() => {
        (
            async () => {
                const results = await itemsFetch.fetch();
                setItems([...results]);
                const res = await categoriesFetch.fetch();
                setItems([...res]);
            }
        )();
    }, [items]);

    const updateList = (type, service) => {
        if(type==="categories"){
            if(service.action==="add"){
                data = {}
                const { save } = useNewMoralisObject("Categories");
                for(i in ["name", "createdBy"]){
                    data.set(i, service.values[i]);
                }
                save(data, { 
                    onSuccess: (obj) => {
                        alert("New Category Created");
                    },
                    onError: (err) => {
                        alert("Error: "+ err.message);
                    }
                });
            }
            else if(service.action === "delete") {

            }
        }
        else if(type==="items"){
            
        }
    }

    return (
        <AdminPanelContext.Provider value={{
            categories,
            items,
            updateList
        }}>
            {children}
        </AdminPanelContext.Provider>
    )
}