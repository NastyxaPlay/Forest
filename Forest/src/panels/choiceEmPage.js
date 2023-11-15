import React, {useState} from "react";
import {Panel, Div, Title, Text, Link} from "@vkontakte/vkui";
import './css/choiceEmPage.css';

const choiceEmPage = () =>{

    return(
        <Panel id="home"> 
            <Div className="mainChoice">
                <Div className="textDivQue">
                    <Title className="textQue" level="2">Какую эмоцию испытываешь?</Title>
                </Div>
                <Div className="mainCardChoice">
                    <Div className="neytral"></Div>
                    <Div className="sad"></Div>
                    <Div className="angry"></Div>
                    <Div className="happy"></Div>
                    <Div className="fear"></Div>
                </Div>
                <Div className="continueButtonChoice">
                    <Link className="continueButtonTextChoice">Продолжить</Link>
                </Div>
            </Div>
        </Panel>
    );
}

export default choiceEmPage;