import {Panel, Div, Title, Text, Link, Image} from "@vkontakte/vkui";
import './css/ThingsCalendarPage.css';

import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";

const ThingsCalendarPage = () =>{

    const routeNavigator = useRouteNavigator();

    return(
        <Panel id="home"> 
            <Div className="mainThingsCalendar">
                <Div className="backVetkaVerx"></Div>
                <Div className="titleAboutThingsCalendar">Мои мысли...</Div>
                <Div className="textAboutThings">
                    <Div>«Сегодня не случилось ничего хорошего и ничего плохого. Иногда мне кажется, что каждый мой день похож на предыдущий. Ничего меня не радует. Ни от чего я не грущу».</Div>
                    <Div>Ваша эмоция была похожа на апатию
                    и ощущалась на 0 баллов.</Div>
                </Div>
                <Div className="rectangleImage">
                    <Div className="imageThingsCalendar"></Div>
                </Div>
                <Link onClick={()=> routeNavigator.push('/calendar')} className="linkButtonThCal"><Div className="buttonThingsCalendar">Вернуться</Div></Link>
                <Div className="backVetkaNiz"></Div>
            </Div>
        </Panel>
    );
}

export default ThingsCalendarPage;