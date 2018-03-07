import React from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';
import './Movie.css';

function Movie({title, poster, genres, synopsis}) {
    return(
        <div className = "Movie">
            <div className = "Movie__Columns">
                <MoviePoster poster={poster} alt={title}/>
            </div>
            <div className = "Movie__Columns">
                <h1>{title}</h1>
                <div className = "Movie__Genres">
                    {genres.map((genres, index) => <MovieGenres genres = {genres} key = {index} />)}
                </div>
                <div className = "Movie__Synopsis">
                    <LinesEllipsis
                        text = {synopsis}
                        maxLine = "3"
                        ellipsis = "..."
                        trimRight
                        baseOn = "letter"
                    />
                </div>
            </div>
        </div>
    );
}

function MoviePoster({poster, alt}) {
    return(
        <img className = "Movie__Poster" src = {poster} alt = {alt} title = {alt}/>
    );
}

function MovieGenres({genres}) {
    return(
        <span className = "Movie__Genre">{genres}</span>
    );
}

Movie.propTypes =  {
    title : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.array.isRequired,
    synopsis : PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster : PropTypes.string.isRequired,
    alt : PropTypes.string.isRequired
}

MovieGenres.propTypes = {
    genres : PropTypes.string.isRequired
}

export default Movie;