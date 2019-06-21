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
            <Modal trigger={<Button>Edit This Company</Button>}>
                <Modal.Header>
                    <Form.Input 
                        label='Company Name: '
                        value={name} 
                        onChange={this.handleChange('name')} />
                </Modal.Header>
    
                <Modal.Content>
                    <Modal.Description>
                        <Form.Input
                            label='Company Address: '
                            value={address}
                            onChange={this.handleChange('address')} />
                        <Form.Input
                            label='Industry: '
                            value={industry}
                            onChange={this.handleChange('industry')} />
                        <Form.Input
                            label='Description: '
                            value={catchPhrase}
                            onChange={this.handleChange('catchPhrase')} />
                        <Form.Input
                            label='Additional Information: '
                            value={bs}
                            onChange={this.handleChange('bs')} />
                        <Form.Input
                            label='Key Contact 1 Name: '
                            value={keyContact1}
                            onChange={this.handleChange('keyContact1')} />
                        <Form.Input
                            label='Key Contact 1 Email: '
                            value={email1}
                            onChange={this.handleChange('email1')} />
                        <Form.Input
                            label='Key Contact 2 Name: '
                            value={keyContact2}
                            onChange={this.handleChange('keyContact2')} />
                        <Form.Input
                            label='Key Contact 2 Email: '
                            value={email2}
                            onChange={this.handleChange('email2')} />
                        <Form.Input
                            label='Status: '
                            value={status}
                            onChange={this.handleChange('status')} />
                        <Form.Input
                            label='Net Worth '
                            value={financialPerformance}
                            onChange={this.handleChange('financialPerformance')} />
                    </Modal.Description>
                <Button onClick={() => this.props.editCompany(this.state.company)}>Save</Button>
            </Modal.Content>
        </Modal>
        )
    }
}

export default EditCompany;