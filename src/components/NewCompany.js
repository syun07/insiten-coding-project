import React, { Component } from 'react';
import { Modal, Button, Form, Message } from 'semantic-ui-react';

class NewCompany extends Component {
    constructor() {
        super();
        this.state = {
            newCompany: {
                name: '',
                address: '',
                industry: '',
                catchPhrase: '',
                bs: '',
                keyContact1: '',
                email1: '',
                keyContact2: '',
                email2: '',
                status: '',
                financialPerformance: ''
            }
        }
    }  

    handleChange = input => event => {
        this.setState({
            newCompany: {
                ...this.state.newCompany, [input]: event.target.value
            }
        })
    }

    render() {
        // console.table(this.state)
        return(
            <Modal trigger={<Button>Add New Company</Button>}>
                <Modal.Header>
                    <Form.Input 
                        label='Company Name: '
                        placeholder='Company Name'
                        onChange={this.handleChange('name')} />
                </Modal.Header>

                <Modal.Content>
                    
                    <Modal.Description>
                        <Form.Input
                            label='Company Address: '
                            placeholder='Company Address'
                            onChange={this.handleChange('address')} />
                        <Form.Input
                            label='Industry: '
                            placeholder='Industry'
                            onChange={this.handleChange('industry')} />
                        <Form.Input
                            label='Description: '
                            placeholder='Description'
                            onChange={this.handleChange('catchPhrase')} />
                        <Form.Input
                            label='Additional Information: '
                            placeholder='Additional Information'
                            onChange={this.handleChange('bs')} />
                        <Form.Input
                            label='Key Contact 1 Name: '
                            placeholder='Key Contact 1 Name'
                            onChange={this.handleChange('keyContact1')} />
                        <Form.Input
                            label='Key Contact 1 Email: '
                            placeholder='Key Contact 1 Email'
                            onChange={this.handleChange('email1')} />
                        <Form.Input
                            label='Key Contact 2 Name: '
                            placeholder='Key Contact 2 Name'
                            onChange={this.handleChange('keyContact2')} />
                        <Form.Input
                            label='Key Contact 2 Email: '
                            placeholder='Key Contact 2 Email'
                            onChange={this.handleChange('email2')} />
                        <Form.Input
                            label='Status: '
                            placeholder='Status'
                            onChange={this.handleChange('status')} />
                        <Form.Input
                            label='Net Worth '
                            placeholder='Net Worth'
                            onChange={this.handleChange('financialPerformance')} />
                    </Modal.Description>
                    <Button onClick={() => this.props.saveNewCompany(this.state.newCompany)}>Save</Button>
                </Modal.Content>
            </Modal>
        )
    }
}

export default NewCompany;