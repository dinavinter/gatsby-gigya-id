import { createContext, useContext } from 'react';
export const AuthContext = createContext({isLoggedIn:false});

export const GigyaContext = createContext({isLoggedIn:false});

export function useGigya() {
    const gigya= useContext(GigyaContext);
    if(gigya && gigya.socialize && gigya.accounts)
        return {...gigya, socialize:gigya.socialize, accounts:gigya.accounts};
    return {isLoggedIn:false, gigyaNotLoaded:()=> console.log("gigya is not loaded")}

}

