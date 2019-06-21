import React, { Component } from 'react';
import { Modal, Button, Form, Icon } from 'semantic-ui-react';

class NewCompany extends Component {
    constructor() {
        super();
        this.state = {
            newCompany: {}
        }
    }  

    handleChange = input => event => {
        event.preventDefault()
        this.setState({
            newCompany: {
                ...this.state.newCompany, [input]: event.target.value
            }
        })
    }

    render() {
        return(
            <Modal trigger= { <Button color='blue' className='add-button'><Icon name='add'/>Add New Company</Button> }>
                <Form>
                    <Modal.Content>   
                        <Modal.Description className='modal-description'>
                            <Form.Input 
                                label='Company Name'
                                placeholder='Company Name'
                                onChange={this.handleChange('name')} />
                            <Form.Input
                                label='Company Address'
                                placeholder='Company Address'
                                onChange={this.handleChange('address')} />
                            <Form.Input
                                label='Industry'
                                placeholder='Industry'
                                onChange={this.handleChange('industry')} />
                            <Form.Input
                                label='Description'
                                placeholder='Description'
                                onChange={this.handleChange('catchPhrase')} />
                            <Form.Input
                                label='Additional Information'
                                placeholder='Additional Information'
                                onChange={this.handleChange('bs')} />
                            <Form.Group widths='equal'>
                                <Form.Input
                                    label='Key Contact 1 Name'
                                    placeholder='Key Contact 1 Name'
                                    onChange={this.handleChange('keyContact1')} />
                                <Form.Input
                                    label='Key Contact 1 Email'
                                    placeholder='Key Contact 1 Email'
                                    onChange={this.handleChange('email1')} />
                            </Form.Group>
                            <Form.Group widths='equal'>
                                <Form.Input
                                    label='Key Contact 2 Name'
                                    placeholder='Key Contact 2 Name'
                                    onChange={this.handleChange('keyContact2')} />
                                <Form.Input
                                    label='Key Contact 2 Email'
                                    placeholder='Key Contact 2 Email'
                                    onChange={this.handleChange('email2')} />
                            </Form.Group>
                            <Form.Input
                                label='Status'
                                placeholder='Status'
                                onChange={this.handleChange('status')} />
                            <Form.Input
                                label='Net Worth'
                                placeholder='Net Worth'
                                onChange={this.handleChange('financialPerformance')} />
                            <Button color='olive' onClick={() => this.props.saveNewCompany(this.state.newCompany)}>Save</Button>
                        </Modal.Description>
                    </Modal.Content>    
                </Form>
            </Modal>
        )
    }
}

export default NewCompany;