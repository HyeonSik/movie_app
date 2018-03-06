import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  state= {

  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies : [
          {
            title : "Matrix",
            poster : "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxMjcwNDIzMF5BMl5BanBnXkFtZTgwNzUxNjU0NzE@._V1_.jpg"
          },
          {
            title : "Full Metal Jacket",
            poster : "https://www.tynesidecinema.co.uk/storage/app/uploads/public/59c/555/720/59c5557200731645091417.jpg"
          },
          {
            title :  "Old Boy",
            poster : "https://a.ltrbxd.com/resized/sm/upload/c9/3j/2v/r4/oldboy-1200-1200-675-675-crop-000000.jpg?k=a1b8014ebc"
          },
          {
            title : "Star Wars" ,
            poster : "https://secure.parksandresorts.wdpromedia.com/resize/mwImage/1/630/354/75/wdpromedia.disney.go.com/media/wdpro-assets/parks-and-tickets/tours-and-experiences/star-wars-guided-tour/star-wars-guided-tour-00.jpg?21102016062907"
          }, 
          {
            title : "HarryPotter",
            poster : "https://nerdist.com/wp-content/uploads/2015/10/harry-potter-image.jpg"
          }
        ]
      })
    },5000)
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title = {movie.title} poster = {movie.poster} key = {index}/>
    })
    return movies
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading...'}
      </div>    
    );
  }
}

export default App;
