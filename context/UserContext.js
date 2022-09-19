import React, { createContext, useState, useEffect, useContext } from 'react';

import { onAuthStateChangedListener } from '../utils/firebase';

const userContext = createContext();

export const UserContext = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            console.log('THE USER IS >>>', user)
            if (user) {
                setCurrentUser(user);
            }

        });

        return unsubscribe;
    }, []);

    return (<userContext.Provider value={{ currentUser, setCurrentUser }}>{children}</userContext.Provider>);
};

export const useUserContext = () => useContext(userContext);