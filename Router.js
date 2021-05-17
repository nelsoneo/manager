import React from 'react';
import { StyleSheet } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './src/components/LoginForm';
import EmployeeList from './src/components/EmployeeList';
import EmployeeCreate from './src/components/EmployeeCreate';

const RouterComponent = () => {
    return (
        <Router sceneStyle= {{paddingTop: 15}}>
            <Scene titleStyle= {styles.styleTitle} hideNavBar key='root'>
                <Scene key='auth'>
                    <Scene key='login' component= {LoginForm} title= 'Please Login'  />
                </Scene>
                
                <Scene key='main'>
                    <Scene 
                    rightTitle='Add'
                    onRight={() => Actions.employeeCreate()}
                    key= 'employeeList' 
                    component= {EmployeeList} 
                    title= 'Employees' 
                    
                    />
                    <Scene key='employeeCreate' component={EmployeeCreate} title='Create Employee' initial/>
                </Scene>
            </Scene>
        </Router>
    );
};

const styles = StyleSheet.create({
    styleTitle: {
        flex: 1, 
        textAlign:'center'
    }
})

export default RouterComponent;

