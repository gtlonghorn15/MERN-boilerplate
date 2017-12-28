import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';

class Stars extends Component {
    constructor() {
        super();

        this.state = {
            rating: 1
        };
    }

    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
    }

    render() {
        const { rating } = this.state;
        return (                
            <div>
				<div>
					<h2>Room Rating: {rating}</h2>
					<StarRatingComponent 
						name="roomrank" 
						starCount={10}
						value={rating}
						onStarClick={this.onStarClick.bind(this)}
					/>
				</div>
				<div>
					<h2>Customer Service Rating: {rating}</h2>
					<StarRatingComponent 
						name="customerservicerank" 
						starCount={3}
						value={rating}
						onStarClick={this.onStarClick.bind(this)}
					/>
				</div>
				<div>
					<h2>Immersion Rating: {rating}</h2>
					<StarRatingComponent 
						name="immersionrank" 
						starCount={3}
						value={rating}
						onStarClick={this.onStarClick.bind(this)}
					/>
				</div>
				<div>
					<h2>Puzzle Quality Rating: {rating}</h2>
					<StarRatingComponent 
						name="puzzlequalityrank" 
						starCount={3}
						value={rating}
						onStarClick={this.onStarClick.bind(this)}
					/>
				</div>
			</div>
        );
    }
}

/*
ReactDOM.render(
    <App />, 
    document.getElementById('app')
);*/

export default Stars;