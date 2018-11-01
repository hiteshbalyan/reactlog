import React from "react";
import {render} from "react-dom";
import {Provider} from 'mobx-react';
import {AppContainer} from 'react-hot-loader';

import App from "./App";
import TasksStoreInstance from "./store/TasksStore";


// Note: The Provider/inject method of passing the store isn't currently used.
// // For debugging
//import Task from "./store/task";
// window.TodoListStoreInstance = TodoListStoreInstance;
//window.todoRoot = TasksStoreInstance;
//window.task = Task;


render(
    <AppContainer>
      <Provider store={TasksStoreInstance}>
        <App/>
      </Provider>
    </AppContainer>,
    document.getElementById("root")
);
