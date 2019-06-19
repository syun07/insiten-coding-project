
import React from 'react';
import { Card, Image, Button, Modal } from 'semantic-ui-react';

const CompanyCard = (props) => {
    // console.log(props.company)
    // const 
    return (
        <Card>
            <Image src={props.company.image} />
            <Card.Content>
                <Card.Header>{props.company.name}</Card.Header>
                <Card.Meta><strong>Industry: </strong>{props.company.industry} | <strong>Net Worth: </strong>{props.company.financialPerformance}M</Card.Meta>
                <Card.Description>{props.company.catchPhrase}, {props.company.bs}</Card.Description>
                <Card.Description>{props.company.status}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                Key Contacts: {props.company.keyContact1}, {props.company.keyContact2}
            </Card.Content>

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
        </Card>
    )
}

export default CompanyCard;