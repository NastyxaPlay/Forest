import React, {useState} from "react";
import {Panel, Div, Title, Text, Link} from "@vkontakte/vkui";
import './css/test.css';


const Test = () =>{

    return(
        <Panel id="home"> 
            <div class="slidecontainer">
                <input type="range" min="1" max="100" value="50" class="slider" id="myRange"/>
                <p>Value: <span id="demo"></span></p>
            </div>
        </Panel>
    );
}

export default Test;