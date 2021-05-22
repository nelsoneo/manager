import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, View, Text } from 'react-native';
import { employeeFetch } from '../actions';

class EmployeeList extends Component {
    componentDidMount(){
        this.props.employeeFetch();

        // this.createDataSource(this.props);
    }

    // componentWillUnmount(nextProps) {
    //     this.createDataSource(nextProps);
    // }

    // createDataSource({ employees }) {
    //     const ds = new FlatList.DataSource({
    //         rowHasChanged: (r1, r2) => r1 !== r2
    //     });

    //     this.DataSource = ds.cloneWithRows(this.props.employees);
    // }

    render(){
        console.log(this.props);
        return (
            <FlatList 
            data={this.props.employees}
            renderItem={({ item }) => <Text>{item.name}</Text>}
            />
        );
    }
}

const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid) => {
    return { ...val, key: uid };
    });
    return { employees };
};

export default connect(mapStateToProps, { employeeFetch })(EmployeeList);