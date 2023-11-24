import React, {useState} from "react";
import {Panel, Div, Title, Text, Link} from "@vkontakte/vkui";
import './css/takePhotoPage.css';

import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";

const takePhotoPage = () =>{

    const routeNavigator = useRouteNavigator();

    return(
        <Panel id="home"> 
            <Div className="mainTakePhoto">
                <Div className="backVetkaVerx"></Div>
                <Div className="mainCardPhoto">
                    
                </Div>
                <Div className="elipsePhoto"></Div>
                <Link className="saveButtonPhotoLink" onClick={()=> routeNavigator.push('/home')}><Div className="saveButtonPhoto">Сохранить</Div></Link>
                <Div className="backVetkaNiz"></Div>
            </Div>
        </Panel>
    );
}

export default takePhotoPage;