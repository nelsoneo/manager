import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCESS, LOGIN_USER_FAIL, LOGIN_USER_START } from '../actions/types';

 const INITIAL_STATE = { email: '', password: '', user: null, error: '', loading: false };

 export default (state = INITIAL_STATE, action) => {
     console.log(action);
     
    switch (action.type) {
        case EMAIL_CHANGED: 
            return { ...state, email: action.playload };
        
        case PASSWORD_CHANGED:
            return { ...state, password: action.playload };
        
        case LOGIN_USER_START:
            return { ...state, loading: true, error: '' };    
        
        case LOGIN_USER_SUCESS:
            return { ...state, ...INITIAL_STATE, user: action.playload }; 
         
        case LOGIN_USER_FAIL:
            return { ...state, error: 'Authentication Failed.', loading: false };    
        default:
            return state;
    }
 };