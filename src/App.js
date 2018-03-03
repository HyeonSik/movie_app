import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movieTitles = [
  "Matrix", 
  "Full Metal Jacket", 
  "Old Boy", 
  "Star Wars"
]

const moviePosters =[
"https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxMjcwNDIzMF5BMl5BanBnXkFtZTgwNzUxNjU0NzE@._V1_.jpg",
"https://www.tynesidecinema.co.uk/storage/app/uploads/public/59c/555/720/59c5557200731645091417.jpg",
"https://a.ltrbxd.com/resized/sm/upload/c9/3j/2v/r4/oldboy-1200-1200-675-675-crop-000000.jpg?k=a1b8014ebc",
"https://secure.parksandresorts.wdpromedia.com/resize/mwImage/1/630/354/75/wdpromedia.disney.go.com/media/wdpro-assets/parks-and-tickets/tours-and-experiences/star-wars-guided-tour/star-wars-guided-tour-00.jpg?21102016062907"
]

/*const movies = [
    {
    title = "Matrix",
    poster = "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxMjcwNDIzMF5BMl5BanBnXkFtZTgwNzUxNjU0NzE@._V1_.jpg"
  },
  {
    title = "Full Metal Jacket",
    poster = "https://www.tynesidecinema.co.uk/storage/app/uploads/public/59c/555/720/59c5557200731645091417.jpg"
  },
  {
    title =  "Old Boy",
    poster = "https://a.ltrbxd.com/resized/sm/upload/c9/3j/2v/r4/oldboy-1200-1200-675-675-crop-000000.jpg?k=a1b8014ebc"
  },
  {
    title = "Star Wars" ,
     poster = "https://secure.parksandresorts.wdpromedia.com/resize/mwImage/1/630/354/75/wdpromedia.disney.go.com/media/wdpro-assets/parks-and-tickets/tours-and-experiences/star-wars-guided-tour/star-wars-guided-tour-00.jpg?21102016062907"
  }
]*/

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={movieTitles[0]} poster={moviePosters[0]}/>
        <Movie title={movieTitles[1]} poster={moviePosters[1]}/>
        <Movie title={movieTitles[2]} poster={moviePosters[2]}/>
        <Movie title={movieTitles[3]} poster={moviePosters[3]}/>
      </div>    
    );
  }
}

export default App;
