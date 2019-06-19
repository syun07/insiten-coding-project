import React from 'react';
import { Modal, Button } from 'semantic-ui-react';

const CompanyModal = (props) => {
    return(
        <Modal trigger={<Button>More Information</Button>}>
            <Modal.Header>{props.company.name}</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <p><strong>Address: </strong>{props.company.address}</p>
                    <p><strong>Industry: </strong>{props.company.industry}</p>
                    <p><strong>Description: </strong>{props.company.catchPhrase}</p>
                    <p><strong>Additional Info: </strong>{props.company.bs}</p>
                    <p><strong>Status: </strong>{props.company.status}</p>
                    <p><strong>Key Contacts: </strong></p>
                    <ul>
                        <li>{props.company.keyContact1}  |  {props.company.email1}</li>
                        <li>{props.company.keyContact2}  |  {props.company.email2}</li>
                    </ul>
                </Modal.Description>
            </Modal.Content>
        </Modal>
    )
}

export default CompanyModal;
