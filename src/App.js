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

  render() {
    console.log(this.state)
    return (
      <Segment>
        <NewCompany 
          saveNewCompany={this.saveNewCompany} />
        <CompanyContainer 
          companies={this.state.renderedCompanies} />
      </Segment>
    )
  }
}

export default App;
