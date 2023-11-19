import React, {useState} from "react";
import {Panel, Div, Title, Text, Link} from "@vkontakte/vkui";
import './css/myThingsPage.css';

const myThingsPage = () =>{

    return(
        <Panel id="home"> 
            <Div className="mainThings">
                <Div className="vetVerx"></Div>
                <Div className="myThings">Мои мысли...</Div>
                <Div className="discriptionThing">
                    <Text>Сегодня не случилось ничего хорошего и ничего плохого. Иногда мне кажется, что каждый мой день похож на предыдущий. Ничего меня не радует. Ни от чего я не грущу.</Text>
                </Div>
                <Div className="howFeelThisEm">Как ощущается эта эмоция?</Div>
                <Div className="choiceEmState">
                    <Link><Div>Спокойствие</Div></Link>
                    <Link><Div>Апатия</Div></Link>
                    <Link><Div>Равнодушие</Div></Link>
                </Div>
                <Link><Div className="takePhoto">Сделать фото</Div></Link>
                <Link><Div className="saveWithoutPhoto">Сохранить без фото</Div></Link>
                <Div className="vetNiz"></Div>
            </Div>
        </Panel>
    );
}

export default myThingsPage;