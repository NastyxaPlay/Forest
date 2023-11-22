import React, {useState} from "react";
import {Panel, Div, Title, Text, Link} from "@vkontakte/vkui";
import './css/takePhotoPage.css';

const takePhotoPage = () =>{

    return(
        <Panel id="home"> 
            <Div className="mainTakePhoto">
                <Div className="backVetkaVerx"></Div>
                <Div className="mainCardPhoto">
                    
                </Div>
                <Div className="elipsePhoto"></Div>
                <Div className="saveButtonPhoto">Сохранить</Div>
                <Div className="backVetkaNiz"></Div>
            </Div>
        </Panel>
    );
}

export default takePhotoPage;