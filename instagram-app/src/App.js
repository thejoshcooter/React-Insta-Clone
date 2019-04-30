import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'

class App extends React.Component {
  constructor() {
    super();
    this.state = {}
  };

  render() {
    return (
      <div className="App">
      <SearchBar />
      <div className="container">
        <div className="content-container">
          <PostContainer />
        </div>

        <div className="sidebar-container">

        </div>
      </div>
    </div>
    );
  }
}

export default App;
