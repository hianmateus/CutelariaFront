import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext({})

// eslint-disable-next-line react/prop-types
export const UserProvider = ({children}) => {
    const [userInfo, setUserInfo] = useState({})

    const putUserData = (userInfo) => {
        setUserInfo(userInfo)

        localStorage.setItem('cutelaria:userData', JSON.stringify(userInfo))
    }

    const logout = () => {
        setUserInfo({})
        localStorage.removeItem('cutelaria:userData')
    }

    useEffect(() => {
        const userInfoLocalStorage = localStorage.getItem('cutelaria:userData')

        if(userInfoLocalStorage) {

            setUserInfo(JSON.parse(userInfoLocalStorage))
        }
    }, [])

    return (
        <UserContext.Provider value={{ userInfo, putUserData, logout }}>{children}</UserContext.Provider>
    )
}

export const useUser = () => {
    const  context = useContext(UserContext)

    if(!context) {
        throw new Error('useUser must be a valid context')
    }

    return context
}
