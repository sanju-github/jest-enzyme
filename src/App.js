import React from 'react';
import _ from 'lodash'; //library to delay the search and use debounce function.
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar'; //file path of Searchbar component.
import VideoList from './components/video_list'; //file path of VideoList component.
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDOZjEzZvpu7cwUFDelmkBy4__qIRgid38';// we need install npm package to work with this key npm install --save youtube-api-search

//class component to work with state. we have changed import React from 'react'; to import React,{ Component } from 'react';
class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          videos: [],
          selectedVideo: null

        };

        this.videoSearch('Nike');
    }

    videoSearch(term){
      YTSearch ({key: API_KEY, term: term},(videos) => { //here videos name can be any name.
        //console.log(videos);
            //this.setState({videos: videos}); when ever we have same key and value names. We can write as below.
            this.setState({
            videos:videos,
            selectedVideo: videos[0] //to avoid null

         }); // new state.
        });
    }
   /*
   1.videos from App component to VideoList component. <VideoList videos={this.state.videos} />
   2. in class based components props are available anywhere  as this.props

   */

    render(){

        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300 ) ;

        return (
        <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
         onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
         videos={this.state.videos} />
        </div>
    );

    }

}

export default App;
