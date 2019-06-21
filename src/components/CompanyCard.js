
import React from 'react';
import { Card } from 'semantic-ui-react';
import CompanyModal from './CompanyModal';

const CompanyCard = (props) => {
    // console.log(props.company)
    return (
        <Card>
            <Card.Content>
                <Card.Header>{props.company.name}</Card.Header>
                <Card.Meta><strong>Industry: </strong>{props.company.industry} | <strong>Net Worth: </strong>{props.company.financialPerformance}M</Card.Meta>
                <Card.Description>{props.company.catchPhrase}, {props.company.bs}</Card.Description>
                <Card.Description>{props.company.status}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                Key Contacts: {props.company.keyContact1}, {props.company.keyContact2}
            </Card.Content>
            <CompanyModal 
                company={props.company} 
                deleteCompany={props.deleteCompany} 
                editCompany={props.editCompany} />
        </Card>
    )
}

export default CompanyCard;