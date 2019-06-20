import React, { Component } from 'react';
import './App.css';
import CompanyContainer from './components/CompanyContainer';
import NewCompany from './components/NewCompany'
import { Segment } from 'semantic-ui-react';

class App extends Component {
  constructor() {
    super() 
    this.state = {
      renderedCompanies: [],
      selectedCompany: null
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/companies')
      .then(res => res.json())
      .then(data => {
        this.setState({
          renderedCompanies: data
        })
      })
  }

  saveNewCompany = (company) => {
    this.setState({
      renderedCompanies: [
        ...this.state.renderedCompanies, company
      ]
    })
  }

  // editCompany = (id, companyObj) => {
  
  // }

  deleteCompany = (id) => {
    let companies = [...this.state.renderedCompanies]
    let index = companies.findIndex(x => x.id === id)
    companies.splice(index, 1)
    this.setState({
      renderedCompanies: companies
    })

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
