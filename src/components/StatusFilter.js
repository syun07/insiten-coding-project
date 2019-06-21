import React from 'react';
import { Dropdown } from 'semantic-ui-react'

let options = [
    {key: 'all', text: 'All', value: 'all'},
    {key: 'approved', text: 'Approved', value: 'Approved'},
    {key: 'declined', text: 'Declined', value: 'Declined'},
    {key: 'pending approval', text: 'Pending approval', value: 'Pending approval'},
    {key: 'researching', text: 'Researching', value: 'Researching'}
]

const StatusFilter = (props) => {
    return(
        <Dropdown 
            placeholder='Filter by Status' 
            options={options} 
            onChange={(event, {value}) => props.handleChange(event, {value})} />
    )
}

export default StatusFilter;