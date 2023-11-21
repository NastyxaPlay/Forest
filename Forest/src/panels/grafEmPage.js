import {Panel, Div, Title, Text, Link} from "@vkontakte/vkui";
import './css/grafEmPage.css';

const grafEmPage = () =>{

    return(
        <Panel id="home"> 
            <Div className="mainGrafWrap">
                <Div className="titleGraf">График настроения</Div>
                <Div className="choiceMouth">
                    <Link><Div className="backArrowGraf"></Div></Link>
                    <Div className="mouthName">октябрь</Div>
                    <Link><Div className="nextArrowGraf"></Div></Link>
                </Div>
                <Div className="mainGraf">
                    <Div className="progressBarGraf">
                        <Div>ХОРОШО</Div>
                        <Div className="progressBarItog">
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
                            <Div></Div>
                        </Div>
                        <Div>ПЛОХО</Div>
                    </Div>
                    <Div className="grafItog">
                        <Div className="datesGraf">
                            <Div>1</Div>
                            <Div>2</Div>
                            <Div>3</Div>
                            <Div>4</Div>
                            <Div>5</Div>
                        </Div>
                        <Div className="gridMood">
                            <Div className="gridSetka">
                                <Div></Div>
                                <Div></Div>
                                <Div></Div>
                                <Div></Div>
                                <Div></Div>
                            </Div>
                        </Div>
                    </Div>
                </Div>
                <Link><Div className="buttonBackGraf">Вернуться</Div></Link>
            </Div>
        </Panel>
    );
}

export default grafEmPage;