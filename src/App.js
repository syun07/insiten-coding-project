import React, { Component } from 'react';
import './App.css';
import CompanyContainer from './components/CompanyContainer';
import Header from './components/Header';
import { Segment } from 'semantic-ui-react';

const API = 'http://localhost:3000/companies'

class App extends Component {
  constructor() {
    super() 
    this.state = {
      allCompanies: [],
      renderedCompanies: []
      // for filter & search functionality
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
    })
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
  }

  deleteCompany = (id) => {
    return fetch(`${API}/${id}`,{
      method: 'DELETE',
    }).then(this.setState({
      allCompanies: this.state.allCompanies.filter(company => company.id !== id),
      renderedCompanies: this.state.allCompanies.filter(company => company.id !== id)
    }))
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
    value === 'all' ? this.setState({ renderedCompanies: this.state.allCompanies }) : this.setState({ renderedCompanies: match })
    // if filter is on 'all', render all companies, else render matches
  }

  render() {
    return (
      <Segment className='body' basic textAlign='center'>
        <Header 
          handleSearch={this.handleSearch}
          companies={this.state.allCompanies} 
          handleChange={this.handleChange}
          saveNewCompany={this.saveNewCompany} />
        <CompanyContainer 
          companies={this.state.renderedCompanies}
          editCompany={this.editCompany} 
          deleteCompany={this.deleteCompany} />
      </Segment>
    )
  }
}

export default App;
