import React, { Component } from 'react';
import { Modal, Button, Form, Icon, Dropdown } from 'semantic-ui-react';

class NewCompany extends Component {
    constructor() {
        super();
        this.state = {
            newCompany: {},
            modalOpen: false
        }
    }  

    handleChange = input => event => {
        this.setState({ newCompany: {...this.state.newCompany, [input]: event.target.value} })
    }

    handleDropdown = (event, {value}) => {
        this.setState({ newCompany: {...this.state.newCompany, 'status': value} })
    }

    handleOpen = () => this.setState({ modalOpen: true })
    handleClose = () => this.setState({ modalOpen: false })

    render() {

        let options = [
            {key: 'all', text: 'All', value: 'all'},
            {key: 'approved', text: 'Approved', value: 'Approved'},
            {key: 'declined', text: 'Declined', value: 'Declined'},
            {key: 'pending approval', text: 'Pending approval', value: 'Pending approval'},
            {key: 'researching', text: 'Researching', value: 'Researching'}
        ]
        
        return(
            <Modal trigger= { <Button color='blue' onClick={this.handleOpen}><Icon name='add'/>Add New Company</Button> }
                open={this.state.modalOpen}
                onClose={this.handleClose}
            >
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
                            <Dropdown
                                placeholder='Status'
                                selection
                                options={options}
                                onChange={(event, {value}) => this.handleDropdown(event, {value})} />
                            <br/><br/>
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
                                label='Net Worth'
                                placeholder='Net Worth'
                                onChange={this.handleChange('financialPerformance')} />
                            <Button color='olive' onClick={() => this.props.saveNewCompany(this.state.newCompany).then(this.handleClose)}>Save</Button>
                        </Modal.Description>
                    </Modal.Content>    
                </Form>
            </Modal>
        )
    }
}

export default NewCompany;