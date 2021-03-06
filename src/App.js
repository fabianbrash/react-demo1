import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bulma.css';
import { render } from '@testing-library/react';


class App extends Component{
  render() {
     
    /*console.log('Our data is', this.props.data)*/
    
    /* ES6 Desctructuring?? */
    const { data } = this.props

    /* or

    const data = this.props.data

    */

    const namesList = data.map(name => {

      /* console.log(name) */
      console.log(name.name, name.sex)
      return (
        <li key={name.id}>{name.name}</li>
      )
    })

    return(
      <div>
      <section className="hero is-medium is-dark is-bold">
       <div className="hero-body">
        <div className="container">
         <h1 className="title has-text-centered">
           React App
        </h1>
      <h2 className="subtitle has-text-centered">
        Hello React World!!
      </h2>
    </div>
  </div>
</section>

<h2 className="has-text-centered">Outside of hero!!</h2>
<ul>
  {namesList}
</ul>


</div>
    )
  }
}

export default App;
