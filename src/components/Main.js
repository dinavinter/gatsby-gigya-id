import React from 'react';
import {
    AuthorizedView,
    NotAuthorizedView,
    ScreenContainer,
    Profile,
    RegistrationLogin,
    useGigyaAuth
} from "../gigya";
 

export function Main() {
    let styles = {
        display: 'inline-block',
        margin: '0 10px'

    }
    return (
        <div style={styles}>
            <AuthorizedView>
                <Profile />
            </AuthorizedView>

            <NotAuthorizedView>
                <RegistrationLogin />
            </NotAuthorizedView>
        </div>
    )
}


 