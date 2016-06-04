'use strict';

import React from 'react';
import Header from './common/header';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}


export default App;
