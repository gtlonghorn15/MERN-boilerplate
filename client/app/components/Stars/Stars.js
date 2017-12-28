import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';

class Stars extends Component {
   constructor() {
      super();

      this.state = {
         //rating: 0
         roomRating: 0,
			customerServiceRating: 0,
			immersionRating: 0,
			puzzleQualityRating: 0
      };
   }

   onStarClick(nextValue, prevValue, name) {
		//var newState = {};
		//newState[e.target.name] = e.target.nextValue;
		//this.setState(newState);
      var stateBeingChanged = this.state[name];
      this.setState({stateBeingChanged: nextValue});
   }

   render() {
      const { roomRating, customerServiceRating, immersionRating, puzzleQualityRating } = this.state;
      //const { rating } = this.state;
      return (                
         <div>
				<div>
					<h2>Room Rating: {this.state.roomRating}</h2>
					<StarRatingComponent 
						name="roomrank" 
						starCount={10}
						value={this.state.roomRating}
						onStarClick={this.onStarClick.bind(this)}
					/>
				</div>
				<div>
					<h2>Customer Service Rating: {this.state.customerServiceRating}</h2>
					<StarRatingComponent 
						name="customerservicerank" 
						starCount={3}
						value={this.state.customerServiceRating}
						onStarClick={this.onStarClick.bind(this)}
					/>
				</div>
				<div>
					<h2>Immersion Rating: {this.state.immersionRating}</h2>
					<StarRatingComponent 
						name="immersionrank" 
						starCount={3}
						value={this.state.immersionRating}
						onStarClick={this.onStarClick.bind(this)}
					/>
				</div>
				<div>
					<h2>Puzzle Quality Rating: {this.state.puzzleQualityRating}</h2>
					<StarRatingComponent 
						name="puzzlequalityrank" 
						starCount={3}
						value={this.state.puzzleQualityRating}
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