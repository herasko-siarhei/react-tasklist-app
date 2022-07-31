import React, {FC, Fragment, useEffect} from 'react';

import taskActions from 'redux/task/task.actions';
import {useAppSelector} from 'hooks/useAppSelector';
import {useAppDispatch} from 'hooks/useAppDispatch';

import Error from 'components/Error';
import Loading from 'components/Loading';
import Task from 'components/Task';

const TaskList: FC = () => {
    const {list, loading, error} = useAppSelector(state => state.task);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(taskActions.getTaskList());
    }, [dispatch]);
    if (error) {
        return <Error error={error}/>;
    } else if (loading) {
        return <Loading/>;
    } else {
        return (
            <Fragment>
                {list.map(task => (
                    <Task key={task.id} {...task}/>
                ))}
            </Fragment>
        );
    }
};

export default TaskList;