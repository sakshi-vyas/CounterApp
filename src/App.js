import React ,  {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Items from './components/Items';
class App extends Component{
  render(){
   
  return (
    <div className="App">
      <Header/>
      <Items/>
      {/*
      <Footer/>*/
  }
    </div>
  );
  }
}

export default App;
