import React, {useState} from "react";
import {Panel, Div, Title, Text, Link} from "@vkontakte/vkui";
import './css/choiceEmPage.css';

const choiceEmPage = () =>{

    return(
        <Panel id="home"> 
            <Div className="mainChoice">
                <Div className="backVetkaVerx"></Div>
                <Div className="textDivQue">
                    <Title className="textQue" level="2">Какую эмоцию испытываешь?</Title>
                </Div>
                <Div className="mainCardChoice">
                    <Div className="neytralCard">
                        <Div className="neytral"></Div>
                        <Text>Нейтрально</Text>
                    </Div>
                    <Div className="sadCard">
                        <Div className="sad"></Div>
                        <Text>Грусть</Text>
                    </Div>
                    <Div className="angryCard">
                        <Div className="angry"></Div>
                        <Text>Злость</Text>
                    </Div>
                    <Div className="happyCard">
                        <Div className="happy"></Div>
                        <Text>Радость</Text>
                    </Div>
                    <Div className="fearCard">
                        <Div className="fear"></Div>
                        <Text>Страх</Text>
                    </Div>
                </Div>
                <Link className="linkEmChoiceButton"><Div className="continueButtonChoice">Продолжить</Div></Link>
                <Div className="backVetkaNiz"></Div>
            </Div>
        </Panel>
    );
}

export default choiceEmPage;