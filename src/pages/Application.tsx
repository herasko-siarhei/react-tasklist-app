import React, {FC, Fragment} from 'react';

import AddTask from 'components/AddTask';
import TaskList from 'components/TaskList';

const Application: FC = () => {
    return (
        <Fragment>
            <AddTask/>
            <TaskList/>
        </Fragment>
    );
};

export default Application;