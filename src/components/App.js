import React, { Component } from 'react';
import Header from './Header.jsx';
import '../styles/bootstrap.min.css';
import Timer from './Timer.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container mt-5">
          <div className="d-flex flex-row">
            <div className="col-md-4 mx-auto">
              <Timer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
