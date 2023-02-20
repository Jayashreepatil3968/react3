import React, { Component } from 'react';
import JSON from "./employee.json";
import Employee from "./components/Employee";
import "./global.css"
import Counter from './components/Counter';


export default class App extends Component {

    constructor()
    {
        super()
        this.state={empDetails : JSON}
    }
  render() {
    return (
      <div>
        <Employee empDetails={this.state.empDetails} />
        <Counter />
      </div>
    )
  }
}
