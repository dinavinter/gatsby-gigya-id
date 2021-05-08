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


export function Bar() {
    const {account, logout} = useGigyaAuth();
    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/"> Id-Booom
            </NavbarBrand>

            <Nav className="mr-auto" navbar>
                <NavItem>
                    <NavLink href="/#/">#</NavLink>
                </NavItem>
            
                <NavItem>
                    <NotAuthorizedView>
                        <NavLink href="/login/">Login</NavLink>
                    </NotAuthorizedView>
                </NavItem>

                <NavItem>
                    <AuthorizedView> 
                        <NavLink href="/profile/"> {account && account.profile.email} </NavLink>
                    </AuthorizedView>
                </NavItem>

                <NavItem> 
                    <AuthorizedView> 
                        <NavLink href="/logout/" onClick={logout}>Logout</NavLink> 
                    </AuthorizedView>
                </NavItem>

            </Nav>
        </Navbar>
    )
        ;
}
