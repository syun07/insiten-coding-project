import React from 'react';
import EditCompany from './EditCompany';
import { Modal, Button } from 'semantic-ui-react';

const CompanyModal = (props) => {

    const { name, address, industry, catchPhrase, bs, status, keyContact1, email1, keyContact2, email2 } = props.company
    
    return(
        <Modal trigger={<Button>More Information</Button>}>
            <Modal.Header>{name}</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <p><strong>Address: </strong>{address}</p>
                    <p><strong>Industry: </strong>{industry}</p>
                    <p><strong>Description: </strong>{catchPhrase}</p>
                    <p><strong>Additional Info: </strong>{bs}</p>
                    <p><strong>Status: </strong>{status}</p>
                    <p><strong>Key Contacts: </strong></p>
                    <ul>
                        <li>{keyContact1}  |  {email1}</li>
                        <li>{keyContact2}  |  {email2}</li>
                    </ul>
                </Modal.Description>
                <Button onClick={() => props.deleteCompany(props.company.id)}>Delete</Button>
                <EditCompany 
                    company={props.company} 
                    editCompany={props.editCompany} />
            </Modal.Content>
        </Modal>
    )
}

export default CompanyModal;
