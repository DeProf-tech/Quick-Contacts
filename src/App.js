import React, { Component } from 'react';
import './App.css';
import Header from '../src/Components/Layout/Header';
import Contacts from './Components/Contact/Contacts';
// import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Contacts from './components/Contacts';
import { Provider } from './context';
import AddContact from '../src/Components/Contact/AddContact';

// import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding="Contact Manager" />
          <AddContact />
          <div className="container">
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
