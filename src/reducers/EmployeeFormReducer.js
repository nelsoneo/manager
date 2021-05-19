import { EMPLOYEE_UPDATE } from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default ( state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            return { ...state, [action.playload.prop]: action.playload.value };
        default:
            return state;
    }
};
