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
        return(
            <Modal trigger={<Button>Edit This Company</Button>}>
                <Modal.Header>
                    <Form.Input 
                        label='Company Name: '
                        value={this.state.company.name} 
                        onChange={this.handleChange('name')} />
                </Modal.Header>
    
                <Modal.Content>
                    <Modal.Description>
                        <Form.Input
                            label='Company Address: '
                            value={this.state.company.address}
                            onChange={this.handleChange('address')} />
                        <Form.Input
                            label='Industry: '
                            value={this.state.company.industry}
                            onChange={this.handleChange('industry')} />
                        <Form.Input
                            label='Description: '
                            value={this.state.company.catchPhrase}
                            onChange={this.handleChange('catchPhrase')} />
                        <Form.Input
                            label='Additional Information: '
                            value={this.state.company.bs}
                            onChange={this.handleChange('bs')} />
                        <Form.Input
                            label='Key Contact 1 Name: '
                            value={this.state.company.keyContact1}
                            onChange={this.handleChange('keyContact1')} />
                        <Form.Input
                            label='Key Contact 1 Email: '
                            value={this.state.company.email1}
                            onChange={this.handleChange('email1')} />
                        <Form.Input
                            label='Key Contact 2 Name: '
                            value={this.state.company.keyContact2}
                            onChange={this.handleChange('keyContact2')} />
                        <Form.Input
                            label='Key Contact 2 Email: '
                            value={this.state.company.email2}
                            onChange={this.handleChange('email2')} />
                        <Form.Input
                            label='Status: '
                            value={this.state.company.status}
                            onChange={this.handleChange('status')} />
                        <Form.Input
                            label='Net Worth '
                            value={this.state.company.financialPerformance}
                            onChange={this.handleChange('financialPerformance')} />
                    </Modal.Description>
                <Button onClick={() => this.props.editCompany(this.state.company.id, this.state.company)}>Save</Button>
            </Modal.Content>
        </Modal>
        )
    }
}

export default EditCompany;