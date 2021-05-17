import React, { Component } from 'react'
import { Card, CardSection, Input, Button } from '../components/common';

class EmployeeCreate extends Component {
    render(){
        return (
        <Card>
            <CardSection>
                <Input
                    label='Name'
                    placeholder='Jane'
                />
            </CardSection>

            <CardSection>
                <Input 
                    label='phone'
                    placeholder='55-555-5555'
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

export default EmployeeCreate;