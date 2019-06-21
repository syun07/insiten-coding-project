import React from 'react';
import EditCompany from './EditCompany';
import { Modal, Button } from 'semantic-ui-react';

const CompanyModal = (props) => {

    const { name, address, industry, catchPhrase, bs, status, keyContact1, email1, keyContact2, email2 } = props.company
    
    return(
        <Modal trigger= {<Button color='blue'>More Information</Button> }>
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

                    <EditCompany 
                        company={props.company} 
                        editCompany={props.editCompany} />
                    <Button color='red' onClick={() => props.deleteCompany(props.company.id)}>Delete</Button>
                </Modal.Description>
            </Modal.Content>
        </Modal>
    )
}

export default CompanyModal;
