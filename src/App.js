import React, { Component, lazy, Suspense } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import axios from 'axios';
import { Button , Container } from 'semantic-ui-react'
import "./App.css"

class App extends Component {
  render(){
    return (
      <React.Fragment>
        <div class="container-pernyataan" >
        <div class="container-field" >
        <div class="container-paragraph" >
         <h2>To , Jhon</h2>
         <p class="text" >we will develop this app n to our free schedule. <br/> I will inform you if there is an update in this application </p>
         <p class="text" >if there is no info = we have not updated this application. <br/> because we have many other matters that are more priority for us</p>
         <br/>
         <h3>From , Busy n*gga</h3>
        </div>
        <br/>
        <Button primary >Contact Developer</Button>
        </div>
        </div>
      </React.Fragment>
    )
  }
}

export default App