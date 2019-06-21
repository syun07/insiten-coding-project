import React, { Component } from 'react';
import './App.css';
import CompanyContainer from './components/CompanyContainer';
import NewCompany from './components/NewCompany';
import SearchBar from './components/SearchBar';
import StatusFilter from './components/StatusFilter';
import { Segment, Grid, Dropdown } from 'semantic-ui-react';


const API = 'http://localhost:3000/companies'

class App extends Component {
  constructor() {
    super() 
    this.state = {
      allCompanies: [],
      renderedCompanies: []
    }
  }

  componentDidMount() {
    fetch(`${API}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          allCompanies: data,
          renderedCompanies: data
        })
      })
  }

  saveNewCompany = (company) => {
    return fetch(`${API}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(company)
    }).then(res => res.json())
    .then(data => {
      this.setState({
        allCompanies: [
          ...this.state.allCompanies, data
        ],
        renderedCompanies: [
          ...this.state.allCompanies, data
        ]
      })
    }).then(window.location.reload())
  }

  editCompany = (company)=> {
    return fetch(`${API}/${company.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(company)
    }).then(res => res.json())
    .then(data => {
      this.setState({
        allCompanies: [
          ...this.state.allCompanies, data
        ],
        renderedCompanies: [
          ...this.state.allCompanies, data
        ]
      })
    }).then(window.location.reload())
    // not the best way to do this but it fixes bug
    // rendered information wouldn't update after state change
  }

  deleteCompany = (id) => {
    return fetch(`${API}/${id}`,{
      method: 'DELETE',
    }).then(this.setState({
      allCompanies: this.state.allCompanies.filter(company => company.id !== id),
      renderedCompanies: this.state.allCompanies.filter(company => company.id !== id)
    })).then(window.location.reload())
  }

  handleSearch = (event) => {
    let query = event.target.value.toLowerCase()
    let match = this.state.allCompanies.filter(company => company.name.toLowerCase().includes(query))
    this.setState({
      renderedCompanies: match
    })
  }

  handleChange = (event, {value}) => {
    let match = this.state.allCompanies.filter(company => company.status === value)
    if (value !== 'all') {
      this.setState({
        renderedCompanies: match
      })
    } else {
      this.setState({
        renderedCompanies: this.state.allCompanies
      })
    }
  }

  render() {
    console.log(this.state)
    return (
      <Segment className='body' basic textAlign='center'>
        <Grid columns='three' divided>
          <Grid.Row>
            <Grid.Column>
              <SearchBar 
                handleSearch={this.handleSearch} />
            </Grid.Column>
            <Grid.Column>
              <StatusFilter 
                companies={this.state.allCompanies}
                handleChange={this.handleChange} />
            </Grid.Column>
            <Grid.Column>
              <NewCompany 
                saveNewCompany={this.saveNewCompany} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <CompanyContainer 
          companies={this.state.renderedCompanies}
          editCompany={this.editCompany} 
          deleteCompany={this.deleteCompany} />
      </Segment>
    )
  }
}

export default App;
