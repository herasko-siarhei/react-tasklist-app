import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {Task, TaskList} from 'types/task';

type TaskState = {
    list: TaskList;
    loading: boolean;
    error: Error | null;
}

const taskState: TaskState = {
    list: [],
    loading: true,
    error: null
};

const taskSlice = createSlice({
    name: 'task',
    initialState: taskState,
    reducers: {
        getTaskList: (state, action: PayloadAction<TaskList>) => {
            state.list = action.payload;
            state.loading = false;
            state.error = null;
        },
        addTask: (state, action: PayloadAction<Task>) => {
            state.list = [action.payload, ...state.list];
            state.loading = false;
            state.error = null;
        },
        setTask: (state, action: PayloadAction<Task>) => {
            state.list = state.list.map(task => task.id === action.payload.id ? action.payload : task);
            state.loading = false;
            state.error = null;
        },
        deleteTask: (state, action: PayloadAction<Task>) => {
            state.list = state.list.filter(task => task.id !== action.payload.id);
            state.loading = false;
            state.error = null;
        },
        error: (state, action: PayloadAction<Error>) => {
            state.list = [];
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export default taskSlice;

