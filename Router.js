import React from 'react';
import { StyleSheet } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './src/components/LoginForm';
import EmployeeList from './src/components/EmployeeList';

const RouterComponent = () => {
    return (
        <Router >
            <Scene titleStyle= {styles.styleTitle} hideNavBar key='root'>
                <Scene key='auth'>
                    <Scene key='login' component= {LoginForm} title= 'Please Login' initial />
                </Scene>
                
                <Scene key='main'>
                    <Scene key= 'employeeList' component= {EmployeeList} title= 'Employees' />
                </Scene>
            </Scene>
        </Router>
    );
};

const styles = StyleSheet.create({
    styleTitle: {
        flex: 1, 
        textAlign:'center',
        paddingTop: 35
    }
})

export default RouterComponent;

