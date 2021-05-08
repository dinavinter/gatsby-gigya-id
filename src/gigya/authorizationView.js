import React from "react"

import {useGigyaAuth} from ".";

export function AuthorizedView({children} ) {
    const {isLoggedIn}= useGigyaAuth();

    return <div> {isLoggedIn? <div>{children}</div>:<></>}</div>;
}


export function NotAuthorizedView({children} ) {
    const {isLoggedIn}= useGigyaAuth();

    return  <div> {!isLoggedIn? <div>{children}</div>:<></>}</div>;
}