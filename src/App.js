import React, { Fragment } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Card from './Card';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import Footer from './Footer';

function App() {

  const day = new Date().getFullYear();

  return (
    <Fragment>

      <Navbar 
        title='Start Bootstrap'
      />
      <Jumbotron />
      <Card />
      <Footer 
        day={day}
      />

    </Fragment>
  );
}

export default App;
