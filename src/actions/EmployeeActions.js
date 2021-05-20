import { EMPLOYEE_UPDATE } from './types';

export const employeeUpdate = ({ prop, value}) => {
    return {
        type: EMPLOYEE_UPDATE,
        playload: { prop, value }
    };
};

export const employeeCreate = ({ name, phone, shift }) => {
    console.log(name, phone, shift);
};