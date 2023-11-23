import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import HelloPage from './panels/helloPage';
import MainPage from './panels/mainPage';
import ChoiceEmPage from './panels/choiceEmPage';
import MyThingsPage from './panels/myThingsPage';
import GalleryMoodPage from './panels/galleryMoodPage';
import GrafEmPage from './panels/grafEmPage'
import ThingsWithPhotoCalendarPage from './panels/ThingsWithPhotoCalendarPage';
import ThingsCalendarPage from './panels/ThingsCalendarPage';
import TakePhotoPage from './panels/takePhotoPage';
import CalendarPage from './panels/calendarPage';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useActiveVkuiLocation, useGetPanelForView } from '@vkontakte/vk-mini-apps-router';

const App = () => {
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	useEffect(() => {
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const {view: activeView} = useActiveVkuiLocation();
	const activePanel = useGetPanelForView('default_view');

	return (
		<ConfigProvider>
			<AdaptivityProvider>
				<AppRoot>
					<SplitLayout popout={popout}>
						<SplitCol>
							<View activePanel={activePanel} id={activeView}>
								<MainPage id={activePanel} nav="home_panel"/>
								<GrafEmPage id={activePanel} nav="grafik_panel"/>
								<CalendarPage id={activePanel} nav="calendar_panel"/>
								<GalleryMoodPage id={activePanel} nav="galery_panel"/>
								<ChoiceEmPage id={activePanel} nav="choose_panel"/>
								<MyThingsPage id={activePanel} nav="mythings_panel"/>
								<ThingsCalendarPage id={activePanel} nav="calendarthings_panel"/>
								<TakePhotoPage id={activePanel} nav="photo_panel"/>
							</View>
						</SplitCol>
					</SplitLayout>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}

export default App;
