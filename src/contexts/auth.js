import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();

    useEffect(() => {
        const userToken = localStorage.getItem("user_token");
        const usersStorage = localStorage.getItem("users_db")

        if (userToken && usersStorage) {
            const hasUser = JSON.parse(usersStorage)?.filter(
                (user) => user.email === JSON.parse(userToken).email
            );

            if (hasUser) setUser(hasUser[0]);
        }

    }, []);

    return <AuthContext.Provider>{children}</AuthContext.Provider>
};

const signIn = (email, password) => {
    const usersStorage = JSON.parse(localStorage.getItem("users-db"))
    const hasUser = usersStorage?.filter(((user) => user.email === email));

    if(hasUser?.length){
        if (hasUser[0].email === && hasUser[0].password === password) {
            
        }
    }
}