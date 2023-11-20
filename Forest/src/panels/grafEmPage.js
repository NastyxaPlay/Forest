import {Panel, Div, Title, Text, Link} from "@vkontakte/vkui";
import './css/grafEmPage.css';

const grafEmPage = () =>{

    return(
        <Panel id="home"> 
            <Div className="mainGraf">
                <Div className="titleGraf">График настроения</Div>
                <Div className="choiceMouth">
                    <Link><Div className="backArrowGraf"></Div></Link>
                    <Div className="mouthName">октябрь</Div>
                    <Link><Div className="nextArrowGraf"></Div></Link>
                </Div>
                <Div className="mainGraf">
                    <Div className="progressBarEm"></Div>
                    <Div className="gridMood"></Div>
                </Div>
                <Link><Div className="buttonBackGraf">Вернуться</Div></Link>
            </Div>
        </Panel>
    );
}

export default grafEmPage;