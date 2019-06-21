import React, { Component } from 'react';
import { Modal, Form, Button } from 'semantic-ui-react';

class EditCompany extends Component {
    constructor(props) {
        super(props);
        this.state = {
            company: props.company
        }
    }

    handleChange = input => event => {
        this.setState({
            company: {
                ...this.state.company, [input]: event.target.value
            }
        })
    }

    render() {
        
        const { name, address, industry, catchPhrase, bs, keyContact1, email1, keyContact2, email2, status, financialPerformance} = this.state.company

        return(
            <Modal trigger={<Button className='modal-btn' color='olive'>Edit</Button>}>
                <Form>
                    <Modal.Content>
                        <Modal.Description className='modal-description'>
                            <Form.Input
                                className='center'
                                label='Company Name'
                                value={name} 
                                onChange={this.handleChange('name')} />
                            <Form.Input
                                label='Address'
                                value={address}
                                onChange={this.handleChange('address')} />
                            <Form.Input
                                label='Industry'
                                value={industry}
                                onChange={this.handleChange('industry')} />
                            <Form.Input
                                label='Description'
                                value={catchPhrase}
                                onChange={this.handleChange('catchPhrase')} />
                            <Form.Input
                                label='Additional Information'
                                value={bs}
                                onChange={this.handleChange('bs')} />
                            <Form.Group widths='equal'>
                                <Form.Input
                                    label='Key Contact 1 Name'
                                    value={keyContact1}
                                    onChange={this.handleChange('keyContact1')} />
                                <Form.Input
                                    label='Key Contact 1 Email'
                                    value={email1}
                                    onChange={this.handleChange('email1')} />
                            </Form.Group>
                            <Form.Group widths='equal'>
                                <Form.Input
                                    label='Key Contact 2 Name'
                                    value={keyContact2}
                                    onChange={this.handleChange('keyContact2')} />
                                <Form.Input
                                    label='Key Contact 2 Email'
                                    value={email2}
                                    onChange={this.handleChange('email2')} />
                            </Form.Group>
                            <Form.Input
                                label='Status'
                                value={status}
                                onChange={this.handleChange('status')} />
                            <Form.Input
                                label='Net Worth'
                                value={financialPerformance}
                                onChange={this.handleChange('financialPerformance')} />
                            <Button color='olive' onClick={() => this.props.editCompany(this.state.company)}>Save</Button>
                        </Modal.Description>
                    </Modal.Content>
                </Form>
            </Modal>
        )
    }
}

export default EditCompany;