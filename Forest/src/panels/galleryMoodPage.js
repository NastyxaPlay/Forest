import {Panel, Div, Title, Text, Link} from "@vkontakte/vkui";
import './css/galleryMoodPage.css';
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";

const galleryMoodPage = () =>{

    const routeNavigator = useRouteNavigator();

    return(
        <Panel id="home"> 
            <Div className="mainGallery">
                <Div className="titleGal">Галлерея настроения</Div>
                <Div className="photosDiv">
                    <Div className="photoOneDiv">
                        <Div className="photo">Фото</Div>
                        <Div className="date_em">
                            <Div className="date">19 октября</Div>
                            <Div className="em1"></Div>
                        </Div>
                    </Div>
                    <Div className="photoOneDiv">
                        <Div className="photo">Фото</Div>
                        <Div className="date_em">
                            <Div className="date">20 октября</Div>
                            <Div className="em2"></Div>
                        </Div>
                    </Div>
                    <Div className="photoOneDiv">
                        <Div className="photo">Фото</Div>
                        <Div className="date_em">
                            <Div className="date">21 октября</Div>
                            <Div className="em3"></Div>
                        </Div>
                    </Div>
                </Div>
                <Link onClick={()=> routeNavigator.push('/home')} className="buttonBackLink"><Div className="buttonBack">Вернуться</Div></Link>
            </Div>
        </Panel>
    );
}

export default galleryMoodPage;