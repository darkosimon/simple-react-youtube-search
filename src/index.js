import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyBu1w6CM52iipSLWDiYlTy00gMJAn-o7xo';



class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null,
            comments: []
        };

        this.videoSearch('Subaru Impreza WRX STI');

    }

    videoSearch(search_input) {

        YTSearch({ key: API_KEY, term: search_input }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            }); // you can write this.setState({ videos }) if the parameter name is same
        });
    }

    onAddComment(commentTxt) {

        var newState = new Array();
        newState.push(commentTxt);


        this.setState(function (previousState, currentProps) {

            var previousStateComments = previousState.comments;
            previousStateComments.push(commentTxt);

            return { comments: previousStateComments };
        });

        //this.setState({ comments: newState });
    }

    render() {
        const videoSearch = _.debounce((searchInput) => { this.videoSearch(searchInput) }, 500);
        return (
            <div>
                <SearchBar onSearchInputChange={this.videoSearch} />
                <VideoDetail onAddComment={this.onAddComment.bind(this)} comments={this.state.comments} video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={(selVideo) => { this.setState({ selectedVideo: selVideo, comments: [] }) } }
                    videos={this.state.videos} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector(".container"));