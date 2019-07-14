import React, { Component } from 'react';
import { Modal, Form, Button, Dropdown } from 'semantic-ui-react';

class EditCompany extends Component {
    constructor(props) {
        super(props);
        this.state = {
            company: props.company
        }
    }

    handleChange = input => event => {
        this.setState({ company: {...this.state.company, [input]: event.target.value} })
    }

    handleDropdown = (event, {value}) => {
        this.setState({ company: {...this.state.company, 'status': value} })
    }

    render() {
        let options = [
            {key: 'approved', text: 'Approved', value: 'Approved'},
            {key: 'declined', text: 'Declined', value: 'Declined'},
            {key: 'pending approval', text: 'Pending approval', value: 'Pending approval'},
            {key: 'researching', text: 'Researching', value: 'Researching'}
        ]
        
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
                            <Dropdown
                                placeholder={status}
                                selection
                                options={options}
                                onChange={(event, {value}) => this.handleDropdown(event, {value})} />
                                <br/><br/>
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