import PropTypes from 'prop-types';

import {Screen} from "../gigya/screens";
import React, {useState} from "react";
import {Bar} from "./Navbar";
import {NavItem, NavLink} from "reactstrap";
import {AuthorizedView, NotAuthorizedView, Profile, RegistrationLogin} from "../gigya";

export function ScreenBar(props) {

    const {screen} = props;
    const [activeScreen, setActiveScreen] = useState(screen);


    let closeScreen = () => setActiveScreen(null);


    const openScreen = (screenDetails) => setActiveScreen(screenDetails);

    return (
        <div>
            <header>
                <Bar openScreen={openScreen}/>
            </header>
            <div id="auth"
                 style={activeScreen ? {display: 'flex'} : {display: 'none'}}>

                <article className={`${activeScreen ? 'active' : ''} ${activeScreen ? 'timeout' : ''}`}>
                    {activeScreen ?
                        <Screen screenSet={activeScreen.screenSet} startScreen={activeScreen.startScreen}
                                onSubmit={closeScreen}/>
                        :
                        <></>}
                </article>
            </div>

 

        </div>


    )

}

ScreenBar.propTypes = {
    route: PropTypes.object,
    screen: PropTypes.object,
    isActive: PropTypes.bool,
    timeout: PropTypes.bool,

}

