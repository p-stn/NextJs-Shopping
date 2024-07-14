
'use client';

import { createContext, useContext, useState } from "react";


const GlobalContext = createContext({
    userStatus: false,
    setUserStatus: (val) => {},
    carts:[],
    // setUserId: (): string => '',
    data: [],
    // setData: (): =>[]
})

export const GlobalContextProvider = ({ children }) => {
    const [userStatus, setUserStatus] = useState(false);
    const [data, setData] = useState([]);
    const [carts,setCarts] = useState([])
    
    return (
        <GlobalContext.Provider value={{ userStatus, setUserStatus,carts,setCarts}}>
            {children}
        </GlobalContext.Provider>
    )
};

export const useGlobalContext = () => useContext(GlobalContext);