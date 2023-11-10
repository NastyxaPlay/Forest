import React, {useState} from "react";
import {Panel, Div, Title} from "@vkontakte/vkui";
import './css/helloPage.css';

const HelloPage = ({fetchedUser}) =>{

    return(
        <Panel id="home"> 
            <Div className="hello">
                <Title className="user_name">Привет, NAME!</Title>
                <Div className="obl1"></Div>
                <Div className="obl2"></Div>
                <Div className="mount"></Div>
            </Div>
        </Panel>
    );
}

export default HelloPage;