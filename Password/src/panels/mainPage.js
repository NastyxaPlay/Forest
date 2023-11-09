import React, {useState} from "react";
import {Panel, Div, Title, Text} from "@vkontakte/vkui";
import './css/mainPage.css';

const MainPage = () =>{

    return(
        <Panel id="home"> 
            <Div className="main">
                <Div className="week">
                    <Div className="monday">
                        <Text>пн</Text>
                        <Div className="dayCard"></Div>
                    </Div>
                    <Div className="thursday">
                        <Text>вт</Text>
                        <Div className="dayCard"></Div>
                    </Div>
                    <Div className="wendsday">
                        <Text>ср</Text>
                        <Div className="dayCard"></Div>
                    </Div>
                    <Div className="thirdsday">
                        <Text>чт</Text>
                        <Div className="dayCard"></Div>
                    </Div>
                    <Div className="friday">
                        <Text>пт</Text>
                        <Div className="dayCard"></Div>
                    </Div>
                    <Div className="saturday">
                        <Text>сб</Text>
                        <Div className="dayCard"></Div>
                    </Div>
                    <Div className="sunday">
                        <Text>вс</Text>
                        <Div className="dayCard"></Div>
                    </Div>
                </Div>
                <Div className="textDiv">
                    <Title className="textFeel" level="2">Как ты себя чувствуешь?</Title>
                </Div>
                <Div className="mainCard"></Div>
                <Div className="menuButtons">
                    <Div className="galery"></Div>
                    <Div className="grafik"></Div>
                    <Div className="calendary"></Div>
                </Div>
            </Div>
        </Panel>
    );
}

export default MainPage;