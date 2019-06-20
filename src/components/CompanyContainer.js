import React from 'react';
import CompanyCard from './CompanyCard';
import { Card } from 'semantic-ui-react';

const CompanyContainer = (props) => {
    const mapCompanies = props.companies.map((company, index) =>
        <CompanyCard 
            key={index} 
            company={company} 
            openCompanyInfo={props.openCompanyInfo} 
            editCompany={props.editCompany} 
            deleteCompany={props.deleteCompany} />
    )
    return(
        <Card.Group
            itemsPerRow={4}>
            {mapCompanies}
        </Card.Group>
    )
}

export default CompanyContainer;