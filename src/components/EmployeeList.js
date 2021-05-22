import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, View, Text } from 'react-native';
import { employeeFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
    componentDidMount(){
        this.props.employeeFetch();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.employees.length !== this.props.employees.length) {
          this.props.employeeFetch();
        }
      }
     
     
      render() {
          console.log(this.props.employee);
        return (
          <FlatList
          data={this.props.employees} 
          renderItem={({item}) => <ListItem employee={item}/>}
          keyExtractor={item => item.uid}
           />
        );
      };
    }

const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
    });
    return { employees };
   };

export default connect(mapStateToProps, { employeeFetch })(EmployeeList);