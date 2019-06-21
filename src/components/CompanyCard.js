
import React from 'react';
import CompanyModal from './CompanyModal';
import { Card, Label } from 'semantic-ui-react';

const CompanyCard = (props) => {

    const { name, industry, financialPerformance, catchPhrase, bs, status, keyContact1, keyContact2 } = props.company
    
    let color;
    switch (props.company.status) {
        case 'Approved':
            color = 'green'
            break;
        case 'Declined':
            color = 'red'
            break;
        case 'Pending approval':
            color='yellow'
            break;
        case 'Researching':
            color='orange'
            break;
        default:
            return null;
    }

    return (
        <Card>
            <Card.Content>
                <Card.Header>{name}</Card.Header>
                <Card.Meta><strong>Industry: </strong>{industry} | <strong>Net Worth: </strong>{financialPerformance}M</Card.Meta>
                <Card.Description>{catchPhrase}, {bs}</Card.Description>
                <Card.Description><Label color={color}>{status}</Label></Card.Description>
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