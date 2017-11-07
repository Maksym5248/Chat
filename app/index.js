import React from "react";
import { Provider } from "react-redux";
import configureStore  from "./store/configStore";
import AppWithNavigationState from "./navigators/AppNavigator";

const store = configureStore();

const Root = () => (
    <Provider store={store}>
        <AppWithNavigationState />
    </Provider>
);

export default Root;
/*
Якщо не стартує побудова скрипта
cmd /k ipconfig /all взнати ip адресу
set REACT_NATIVE_PACKAGER_HOSTNAME=192.168.0.100 - встановити
 */