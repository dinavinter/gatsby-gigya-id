import { useGigya} from "./context";
   
export function useGigyaAuth( ) {
    const {isLoggedIn, setIsLoggedIn, logout, account}= useGigya();

    return {isLoggedIn, setIsLoggedIn, logout, account}; 
}
 
