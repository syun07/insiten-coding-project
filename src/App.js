import React, { Component } from 'react';
import './App.css';
import CompanyContainer from './components/CompanyContainer';

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

  render() {
    // console.log(this.state)
    return (
      <div>
        <CompanyContainer 
          companies={this.state.renderedCompanies} />
      </div>
    )
  }
}

export default App;
