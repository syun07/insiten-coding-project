import React from 'react'
import NewCompany from './NewCompany';
import SearchBar from './SearchBar';
import StatusFilter from './StatusFilter';
import { Grid } from 'semantic-ui-react'

const Header = (props) => {
    return(
        <Grid columns='three' divided>
            <Grid.Row>
                <Grid.Column>
                    <SearchBar 
                        handleSearch={props.handleSearch} />
                </Grid.Column>
                <Grid.Column>
                    <StatusFilter 
                        companies={props.allCompanies}
                        handleChange={props.handleChange} />
                </Grid.Column>
                <Grid.Column>
                    <NewCompany 
                        saveNewCompany={props.saveNewCompany} />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default Header;