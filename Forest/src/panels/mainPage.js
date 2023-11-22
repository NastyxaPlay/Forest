import React, {useState} from "react";
import {Panel, Div, Title, Text, Link} from "@vkontakte/vkui";
import './css/mainPage.css';

const MainPage = () =>{

    return(
        <Panel id="home"> 
            <Div className="main">
                <Div className="week">
                    <Link><Div className="backArrow"></Div></Link>
                    <Div className="monday">
                        <Text className="textDays">пн</Text>
                        <Div className="dayCard">
                            <Text className="numberDayMain">1</Text>
                        </Div>
                    </Div>
                    <Div className="thursday">
                        <Text className="textDays">вт</Text>
                        <Div className="dayCard">
                            <Text className="numberDayMain">2</Text>
                        </Div>
                    </Div>
                    <Div className="wendsday">
                        <Text className="textDays">ср</Text>
                        <Div className="dayCard">
                            <Text className="numberDayMain">3</Text>
                        </Div>
                    </Div>
                    <Div className="thirdsday">
                        <Text className="textDays">чт</Text>
                        <Div className="dayCard">
                            <Text className="numberDayMain">4</Text>
                        </Div>
                    </Div>
                    <Div className="friday">
                        <Text className="textDays">пт</Text>
                        <Div className="dayCard">
                            <Text className="numberDayMain">5</Text>
                        </Div>
                    </Div>
                    <Div className="saturday">
                        <Text className="textDays">сб</Text>
                        <Div className="dayCard">
                            <Text className="numberDayMain">6</Text>
                        </Div>
                    </Div>
                    <Div className="sunday">
                        <Text className="textDays">вс</Text>
                        <Div className="dayCard">
                            <Text className="numberDayMain">7</Text>
                        </Div>
                    </Div>
                    <Link><Div className="nextArrow"></Div></Link>
                </Div>
                <Div className="textDiv">
                    <Title className="textFeel" level="2">Как ты себя чувствуешь?</Title>
                </Div>
                <Div className="mainCard">
                    <Div className="mainAnimal"></Div>
                    <Div className="moodTrack">
                        <Div className="bad-good">
                            <Div className="bad">Плохо</Div>
                            <Div className="good">Хорошо</Div>
                        </Div>
                        <Div className="progress">
                            <Div></Div>
                            <Div></Div>
                            <Div></Div>
                            <Div></Div>
                            <Div></Div>
                            <Div></Div>
                            <Div></Div>
                            <Div></Div>
                            <Div></Div>
                            <Div></Div>
                            <Div></Div>
                        </Div>
                    </Div>
                   <Link><Div className="continueButton">Продолжить</Div></Link>
                </Div>
                <Div className="menuButtons">
                    <Link><Div className="galery"></Div></Link>
                    <Link><Div className="grafik"></Div></Link>
                    <Link><Div className="calendary"></Div></Link>
                </Div>
            </Div>
        </Panel>
    );
}

export default MainPage;