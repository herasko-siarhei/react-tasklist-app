import React, {ChangeEvent, FC, useState} from 'react';
import {Button, Stack, TextField} from '@mui/material';
import {AddOutlined} from '@mui/icons-material';

import taskActions from 'redux/task/task.actions';
import {useAppDispatch} from 'hooks/useAppDispatch';

const AddTask: FC = () => {
    const [text, setText] = useState('');
    const dispatch = useAppDispatch();

    function changeText(event: ChangeEvent<HTMLTextAreaElement>) {
        setText(event.target.value);
    }

    function addTask() {
        dispatch(taskActions.addTask({
            id: Date.now(),
            completed: false,
            text
        }));
        setText('');
    }

    return (
        <Stack direction="row" spacing={1}>
            <TextField
                value={text}
                onChange={changeText}
                placeholder="What's Next?"
                size="small"
                fullWidth
            />
            <Button onClick={addTask} variant="outlined" color="inherit">
                <AddOutlined/>
            </Button>
        </Stack>
    );
};

export default AddTask;