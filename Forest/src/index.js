import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import App from "./App";

import { RouterProvider, createHashRouter} from '@vkontakte/vk-mini-apps-router';
import { AdaptivityProvider, ConfigProvider, AppRoot } from "@vkontakte/vkui";

// Init VK Mini App
bridge.send("VKWebAppInit");

const router = createHashRouter([
  {
    path: 'home',
    panel: 'home_panel',
    view: 'default_view'
  },
  {
    path: 'grafik',
    panel: 'grafik_panel',
    view: 'default_view'
  },
  {
    path: 'calendar',
    panel: 'calendar_panel',
    view: 'default_view'
  },
  {
    path: 'galery',
    panel: 'galery_panel',
    view: 'default_view'
  },
  {
    path: 'choose',
    panel: 'choose_panel',
    view: 'default_view'
  },
  {
    path: 'mythings',
    panel: 'mythings_panel',
    view: 'default_view'
  },
  {
    path: 'photo',
    panel: 'photo_panel',
    view: 'default_view'
  },
  {
    path: 'calendarthings',
    panel: 'calendarthings_panel',
    view: 'default_view'
  },
  {
    path: '/',
    panel: 'hello_panel',
    view: 'default_view'
  },
  {
    path: 'test',
    panel: 'test_panel',
    view: 'default_view'
  },
]);

ReactDOM.render(
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>
          <RouterProvider router={router}>
            <App/>
          </RouterProvider>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>,
    document.getElementById("root")
);


if (process.env.NODE_ENV === "development") {
  import("./eruda").then(({ default: eruda }) => {}); //runtime download
}

// ReactDOM.render(<App />, document.getElementById("root"));
