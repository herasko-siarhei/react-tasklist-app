import {GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, User} from 'firebase/auth';
import {collection, deleteDoc, doc, getDocs, orderBy, query, setDoc} from 'firebase/firestore';

import {firebase} from 'configs/firebase';
import {Task, TaskList} from 'types/task';

const api = {
    auth: {
        initialization: () => new Promise<User | null>((res, rej) => {
            onAuthStateChanged(firebase.auth, response => res(response), error => rej(error))();
        }),
        login: () => new Promise<User>((res, rej) => {
            signInWithPopup(firebase.auth, new GoogleAuthProvider())
                .then(response => res(response.user))
                .catch(error => rej(error));
        }),
        logout: () => new Promise<void>((res, rej) => {
            signOut(firebase.auth)
                .then(() => res())
                .catch(error => rej(error));
        })
    },
    database: {
        getTaskList: () => new Promise<TaskList>((res, rej) => {
            // @ts-ignore
            getDocs(query<Task>(collection(firebase.firestore, 'UserList', firebase.auth.currentUser.uid, 'TaskList'), orderBy('id', 'desc')))
                .then(response => {
                    let taskList: TaskList = [];
                    response.forEach(doc => taskList.push(doc.data()));
                    res(taskList);
                })
                .catch(error => rej(error));
        }),
        setTask: (task: Task) => new Promise<void>((res, rej) => {
            // @ts-ignore
            setDoc(doc(firebase.firestore, 'UserList', firebase.auth.currentUser.uid, 'TaskList', String(task.id)), task)
                .then(() => res())
                .catch(error => rej(error));
        }),
        deleteTask: (task: Task) => new Promise<void>((res, rej) => {
            // @ts-ignore
            deleteDoc(doc(firebase.firestore, 'UserList', firebase.auth.currentUser.uid, 'TaskList', String(task.id)))
                .then(() => res())
                .catch(error => rej(error));
        })
    }
};

export default api;