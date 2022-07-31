import React, {ChangeEvent, FC, memo, useState} from 'react';
import {Button, Stack, TextField} from '@mui/material';
import {DeleteOutlined, EditOutlined} from '@mui/icons-material';

import taskActions from 'redux/task/task.actions';
import {useAppDispatch} from 'hooks/useAppDispatch';
import {Task as TTask} from 'types/task';

type TaskProps = TTask;

const Task: FC<TaskProps> = (task) => {
    const [edit, setEdit] = useState(false);
    const [text, setText] = useState(task.text);
    const dispatch = useAppDispatch();

    function toggleEdit() {
        if (edit) {
            dispatch(taskActions.setTask({
                ...task,
                text
            }));
        }
        setEdit(!edit);
    }

    function changeText(event: ChangeEvent<HTMLTextAreaElement>) {
        setText(event.target.value);
    }

    function toggleCompletedTask() {
        dispatch(taskActions.setTask({
            ...task,
            completed: !task.completed
        }));
    }

    function deleteTask() {
        dispatch(taskActions.deleteTask(task));
    }

    return (
        <Stack direction="row" spacing={1}>
            <TextField
                disabled={!edit}
                value={text}
                onChange={changeText}
                onClick={toggleCompletedTask}
                sx={{textDecoration: task.completed ? 'line-through' : 'none'}}
                size="small"
                fullWidth
            />
            <Button onClick={toggleEdit} variant="outlined" color="primary">
                <EditOutlined/>
            </Button>
            <Button onClick={deleteTask} variant="outlined" color="error">
                <DeleteOutlined/>
            </Button>
        </Stack>
    );
};

export default memo(Task);