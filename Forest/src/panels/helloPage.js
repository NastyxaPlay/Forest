import React, {useState, useEffect} from "react";
import bridge from '@vkontakte/vk-bridge';
import {Panel, Div, Title} from "@vkontakte/vkui";
import './css/helloPage.css';

const HelloPage = () =>{

    const [fetchedUser, setUser] = useState(null);

    useEffect(() => {
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
		}
		fetchData();
	}, []);

    return(
        <Panel id="home"> 
            <Div className="hello">
                {fetchedUser && <Title className="user_name">Привет, {fetchedUser.first_name}!</Title>}
                <Div className="obl1"></Div>
                <Div className="obl2"></Div>
                <Div className="mount"></Div>
            </Div>
        </Panel>
    );
}

export default HelloPage;