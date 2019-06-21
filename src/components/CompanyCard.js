
import React from 'react';
import { Card } from 'semantic-ui-react';
import CompanyModal from './CompanyModal';

const CompanyCard = (props) => {

    const { name, industry, financialPerformance, catchPhrase, bs, status, keyContact1, keyContact2 } = props.company

    return (
        <Card>
            <Card.Content>
                <Card.Header>{name}</Card.Header>
                <Card.Meta><strong>Industry: </strong>{industry} | <strong>Net Worth: </strong>{financialPerformance}M</Card.Meta>
                <Card.Description>{catchPhrase}, {bs}</Card.Description>
                <Card.Description>{status}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                Key Contacts: {keyContact1}, {keyContact2}
            </Card.Content>
            
            <CompanyModal 
                company={props.company} 
                deleteCompany={props.deleteCompany} 
                editCompany={props.editCompany} />
        </Card>
    )
}

export default CompanyCard;