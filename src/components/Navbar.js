import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
import {AuthorizedView, NotAuthorizedView, useGigyaAuth} from "../gigya";
import {useFido} from "../gigya/useGigyaAuth";
import {ScreenSets} from "../gigya/screens";

const LinkButton = props => <button
    {...props}
    type="button"
    className="link-button"
>
    {props.children}
</button>


const Logout = props => {
    const {logout} = useGigyaAuth();
    return <LinkButton {...props} onClick={logout}>Logout</LinkButton>;
}


export function Bar({openScreen}) {
    const {account, logout} = useGigyaAuth();
    const {login, register} = useFido();
    const accountEmail = account && account.profile && account.profile.email;
    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/"> Id-Booom
            </NavbarBrand>

            <Nav className="mr-auto" navbar>
                <NavItem>
                    <NavLink href="javascript:;"># {accountEmail}</NavLink>
                </NavItem>

                <NavItem>
                    <NavLink href="javascript:;" onClick={e => openScreen(ScreenSets.Lite)}>Subscribe</NavLink>
                </NavItem>

                <NavItem>
                    <NotAuthorizedView>
                        <NavLink href="javascript:;" onClick={e => openScreen(ScreenSets.Login)}>Login</NavLink>
                    </NotAuthorizedView>
                </NavItem>

                <NavItem>
                    <AuthorizedView>
                        <NavLink href="javascript:;" onClick={register}>Register Device</NavLink>
                    </AuthorizedView>
                </NavItem>

                <NavItem>
                    <AuthorizedView>
                        <NavLink href="javascript:;" onClick={e => openScreen(ScreenSets.Profile)}>Profile</NavLink>
                    </AuthorizedView>
                </NavItem>

                <NavItem>
                    <AuthorizedView>
                        <NavLink href="javascript:;" onClick={logout}>Logout</NavLink>
                    </AuthorizedView>
                </NavItem>


                <NavItem>
                    <NotAuthorizedView>
                        <NavLink href="javascript:;" onClick={login}>Fido Login</NavLink>
                    </NotAuthorizedView>
                </NavItem>


            </Nav>
        </Navbar>

    )
        ;
}
