import React from 'react';
import Header from './header.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node.isRequired
};

export default App;

