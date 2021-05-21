import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { EMPLOYEE_UPDATE } from './types';

export const employeeUpdate = ({ prop, value}) => {
    return {
        type: EMPLOYEE_UPDATE,
        playload: { prop, value }
    };
};

export const employeeCreate = ({ name, phone, shift }) => {
    const { currentUser } = firebase.auth();
    return  () => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .push({ name, phone, shift })
        .then(() => Actions.employeeList({ type: 'reset'}));
    };
};