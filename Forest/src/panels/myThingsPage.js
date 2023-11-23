import React, {useState} from "react";
import {Panel, Div, Title, Text, Link} from "@vkontakte/vkui";
import './css/myThingsPage.css';

import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";

const myThingsPage = () =>{

    const routeNavigator = useRouteNavigator();

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
                    <Link><Div className="stateEm1">Спокойствие</Div></Link>
                    <Link><Div className="stateEm2">Апатия</Div></Link>
                    <Link><Div className="stateEm3">Равнодушие</Div></Link>
                </Div>
                <Link onClick={()=> routeNavigator.push('/photo')}><Div className="takePhoto">Сделать фото</Div></Link>
                <Link onClick={()=> routeNavigator.push('/')}><Div className="saveWithoutPhoto">Сохранить без фото</Div></Link>
                <Div className="vetNiz"></Div>
            </Div>
        </Panel>
    );
}

export default myThingsPage;