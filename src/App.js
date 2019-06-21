import React, { Component } from 'react';
import './App.css';
import CompanyContainer from './components/CompanyContainer';
import NewCompany from './components/NewCompany'
import { Segment } from 'semantic-ui-react';


const API = 'http://localhost:3000/companies'

class App extends Component {
  constructor() {
    super() 
    this.state = {
      renderedCompanies: [],
      selectedCompany: null
    }
  }

  componentDidMount() {
    fetch(`${API}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
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
        renderedCompanies: [
          ...this.state.renderedCompanies, data
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
        renderedCompanies: [
          ...this.state.renderedCompanies, data
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
      renderedCompanies: this.state.renderedCompanies.filter(company => company.id !== id)
    })).then(window.location.reload())
  }

  render() {
    console.log(this.state)
    return (
      <Segment>
        <NewCompany 
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
