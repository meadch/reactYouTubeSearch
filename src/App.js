import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import PlayVideoModal from './components/PlayVideoModal'
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      searchResults: [],
      selectedVideoId: '',
      selectedVideoTitle: '',
      showModal: false
    }
  }

  search = (searchTerm) => {
    axios.get(`/videos/${searchTerm}`)
      .then((response) => {
        this.setState({
          searchResults: response.data
        })
      })
      .catch((failedResponse) => { console.warn(failedResponse); });
  }

  openModal = (videoId, videoTitle) => {
    this.setState({
      selectedVideoId: videoId,
      selectedVideoTitle: videoTitle,
      showModal: true
    });
  }

  closeModal = () => {
    this.setState({
      showModal: false
    });
  }

  render() {
    return (
      <div className="app">
        <div className="app-header">
          <h1>Welcome to 3Dubs</h1>
          <SearchBar className='col-md-3 md-offset-2' search={this.search} />
        </div>
        <SearchResults 
          videos={this.state.searchResults}
          openModal={this.openModal}
          />
        <PlayVideoModal 
          show={this.state.showModal}
          onHide={this.closeModal}
          videoId={this.state.selectedVideoId}
          videoTitle={this.state.selectedVideoTitle} 
          />
      </div>
    );
  }
}

export default App;
