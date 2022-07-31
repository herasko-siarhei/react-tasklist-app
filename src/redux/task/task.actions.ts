import api from 'api';
import taskSlice from 'redux/task/task.slice';
import {AppDispatch} from 'types/store';
import {Task} from 'types/task';

const taskActions = {
    getTaskList: () => (dispatch: AppDispatch) => {
        api.database.getTaskList()
            .then(response => dispatch(taskSlice.actions.getTaskList(response)))
            .catch(error => dispatch(taskSlice.actions.error(error)));
    },
    addTask: (task: Task) => (dispatch: AppDispatch) => {
        dispatch(taskSlice.actions.addTask(task));
        api.database.setTask(task)
            .catch(error => dispatch(taskSlice.actions.error(error)));
    },
    setTask: (task: Task) => (dispatch: AppDispatch) => {
        dispatch(taskSlice.actions.setTask(task));
        api.database.setTask(task)
            .catch(error => dispatch(taskSlice.actions.error(error)));
    },
    deleteTask: (task: Task) => (dispatch: AppDispatch) => {
        dispatch(taskSlice.actions.deleteTask(task));
        api.database.deleteTask(task)
            .catch(error => dispatch(taskSlice.actions.error(error)));
    }
};

export default taskActions;