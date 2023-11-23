import React, {useState} from "react";
import {Panel, Div, Title, Text, Link} from "@vkontakte/vkui";
import './css/calendarPage.css';

import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";

const calendarPage = () =>{

    const routeNavigator = useRouteNavigator();

    return(
        <Panel id="home"> 
            <Div className="mainCalendar">
                <Div className="backVetkaVerx"></Div>
                <Div className="titleCalendar">Календарь настроения</Div>
                <Div className="mainCardCalendar">
                    <Div className="dateCalendar">
                        <Div className="numberDay">4-е</Div>
                        <Div className="mouthCalendar">октября</Div>
                    </Div>
                    <Div className="itogCalendarDates">
                        <Div className="datesNumber">
                            <Div>пн</Div>
                            <Div>вт</Div>
                            <Div>ср</Div>
                            <Div>чт</Div>
                            <Div>пт</Div>
                            <Div>сб</Div>
                            <Div>вс</Div>
                        </Div>
                        <Div className="itogCalendar">
                            <Link className="firstDay"><Div >1</Div></Link>
                            <Link><Div>2</Div></Link>
                            <Link><Div>3</Div></Link>
                            <Link><Div>4</Div></Link>
                            <Link><Div>5</Div></Link>
                            <Link><Div>6</Div></Link>
                            <Link><Div>7</Div></Link>
                            <Link><Div>8</Div></Link>
                            <Link><Div>9</Div></Link>
                            <Link><Div>10</Div></Link>
                            <Link><Div>11</Div></Link>
                            <Link><Div>12</Div></Link>
                            <Link><Div>13</Div></Link>
                            <Link><Div>14</Div></Link>
                            <Link><Div>15</Div></Link>
                            <Link><Div>16</Div></Link>
                            <Link><Div>17</Div></Link>
                            <Link><Div>18</Div></Link>
                            <Link><Div>19</Div></Link>
                            <Link><Div>20</Div></Link>
                            <Link><Div>21</Div></Link>
                            <Link><Div>22</Div></Link>
                            <Link><Div>23</Div></Link>
                            <Link><Div>24</Div></Link>
                            <Link><Div>25</Div></Link>
                            <Link><Div>26</Div></Link>
                            <Link><Div>27</Div></Link>
                            <Link><Div>28</Div></Link>
                            <Link><Div>29</Div></Link>
                            <Link><Div>30</Div></Link>
                            <Link><Div>31</Div></Link>
                        </Div>
                    </Div>
                </Div>
                <Div className="textCal1">В этот день я был...</Div>
                <Div className="textCal2">Нейтрален</Div>
                <Link onClick={()=> routeNavigator.push('/calendarthings')}className="seeNoticeButtonLink"><Div className="seeNoticeButton">Посмотреть заметку за день</Div></Link>
                <Div className="backVetkaNiz"></Div>
            </Div>
        </Panel>
    );
}

export default calendarPage;