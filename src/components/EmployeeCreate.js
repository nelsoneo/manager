import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { Card, CardSection, Input, Button } from '../components/common';

class EmployeeCreate extends Component {
    render(){
        return (
        <Card>
            <CardSection>
                <Input
                    label='Name'
                    placeholder='Jane'
                    value = {this.props.name}
                    onChangeText = {value => this.props.employeeUpdate({ prop: 'name', value })}
                />
            </CardSection>

            <CardSection>
                <Input 
                    label='phone'
                    placeholder='55-555-5555'
                    value = {this.props.phone}
                    onChangeText = {value => this.props.employeeUpdate({ prop: 'phone', value })}
                />
            </CardSection>

            <CardSection>
            </CardSection>

            <CardSection>
                <Button>
                    Create
                </Button>
            </CardSection>
        </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, }) (EmployeeCreate);