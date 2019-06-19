
import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const CompanyCard = (props) => {
    console.log(props.company)
    return (
        <Card>
            <Image src={props.company.image} />
            <Card.Content>
                <Card.Header>{props.company.name}</Card.Header>
                <Card.Meta>Industry: {props.company.industry}</Card.Meta>
                <Card.Description>{props.company.catchPhrase}, {props.company.bs}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                Key Contacts: {props.company.keyContact1}, {props.company.keyContact2}
            </Card.Content>
        </Card>
    )
}

export default CompanyCard;