import React from 'react';
import propTypes from 'prop-types';
import './Movie.css';
/*
class Movie extends Component{

	static propTypes = {
		title : propTypes.string.isRequired,
		poster : propTypes.string.isRequired
	}

	render(){
		return(
			<div>
			<h1>{this.props.title}</h1>
			<MoviePoster poster={this.props.poster}	/>
			</div>
		);
	}
}
*/
/*
class MoviePoster extends Component{

	static propTypes = {
		poster : propTypes.string.isRequired
	}
	render(){
		return(
			<img src = {this.props.poster} alt ="Movie Poster"/>
		);
	}
}
*/

function Movie({title,poster, genres, synopsis}){
	return(
		<div className="Movie">
			<div className="Movie__Columns">
				<MoviePoster poster={poster} alt={title}/>
			</div>
			<div className="Movie__Columns">
				<h1>{title}</h1>
				<div className="Movie__Genres">
					{genres.map((genre,index) =><MovieGenre genre={genre} key={index}/>)}
				</div>
			</div>
			<p className="Movie__Synopsis">
				{synopsis}
			</p>
		</div>
	)


}

function MoviePoster({poster,alt}){
	return(
		<img src = {poster} alt ={alt} title={alt} className="Movie__Poster"/>		
	)
}

function MovieGenre({genre}){
	return(
		<span className="Movie__Genre"></span>
	)
}

Movie.propTypes = {
	title : propTypes.string.isRequired,
	poster : propTypes.string.isRequired,
	genres : propTypes.array.isRequired,
	synopsis : propTypes.string.isRequired,
}

MoviePoster.propTypes = {
	poster : propTypes.string.isRequired
}



export default Movie