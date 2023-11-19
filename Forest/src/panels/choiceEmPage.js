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
                    <Div>
                        <Div className="neytral"></Div>
                        <Text>Нейтрально</Text>
                    </Div>
                    <Div>
                        <Div className="sad"></Div>
                        <Text>Грусть</Text>
                    </Div>
                    <Div>
                        <Div className="angry"></Div>
                        <Text>Злость</Text>
                    </Div>
                    <Div>
                        <Div className="happy"></Div>
                        <Text>Радость</Text>
                    </Div>
                    <Div>
                        <Div className="fear"></Div>
                        <Text>Страх</Text>
                    </Div>
                </Div>
                <Div className="continueButtonChoice">
                    <Link className="continueButtonTextChoice">Продолжить</Link>
                </Div>
            </Div>
        </Panel>
    );
}

export default choiceEmPage;