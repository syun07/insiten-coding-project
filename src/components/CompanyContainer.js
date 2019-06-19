import React from 'react';
import CompanyCard from './CompanyCard';

const CompanyContainer = (props) => {
    // console.log(props.companies)
    return(
        <CompanyCard companies={props.companies}/>
    )
}

export default CompanyContainer;