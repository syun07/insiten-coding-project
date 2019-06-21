import React, { Component } from 'react';
import EditCompany from './EditCompany';
import { Modal, Button } from 'semantic-ui-react';

class CompanyModal extends Component {
    // solves problem of state in edit form not updating after deleting company
    // closes modal onClick of delete button
    state = { modalOpen: false }
    handleOpen = () => this.setState({ modalOpen: true })
    handleClose = () => this.setState({ modalOpen: false })

    render() {

        const { id, name, address, industry, catchPhrase, bs, status, keyContact1, email1, keyContact2, email2 } = this.props.company
        
            return(

                <Modal trigger={<Button onClick={this.handleOpen} color='blue'>More Information</Button>}
                    open={this.state.modalOpen}
                    onClose={this.handleClose}
                >
                    <Modal.Header className='modal-header'>{name}</Modal.Header>
                    <Modal.Content>
                        <Modal.Description className='modal-description'>
                            <p><strong>Address</strong><br/>{address}</p>
                            <p><strong>Industry</strong><br/>{industry}</p>
                            <p><strong>Description</strong><br/>{catchPhrase}</p>
                            <p><strong>Additional Info</strong><br/>{bs}</p>
                            <p><strong>Status</strong><br/>{status}</p>
                            <p><strong>Key Contacts</strong><br/></p>
                            <p>{keyContact1}  |  {email1}</p>
                            <p>{keyContact2}  |  {email2}</p>

                            <Modal.Actions>
                                <EditCompany 
                                   company={this.props.company} 
                                    editCompany={this.props.editCompany} />
                                <Button color='red' 
                                    onClick={() => this.props.deleteCompany(id).then(this.handleClose)}>
                                    Delete
                                </Button>
                            </Modal.Actions>
                        </Modal.Description>
                    </Modal.Content>
                </Modal>
            )
        }
}

export default CompanyModal;
