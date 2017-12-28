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

   onStarClickRoom(nextValue, prevValue, name) {
      this.setState({roomRating: nextValue});
   }
   
   onStarClickCustomer(nextValue, prevValue, name) {
      this.setState({customerServiceRating: nextValue});
   }
   
   onStarClickImmersion(nextValue, prevValue, name) {
      this.setState({immersionRating: nextValue});
   }
   
   onStarClickPuzzle(nextValue, prevValue, name) {
      this.setState({puzzleQualityRating: nextValue});
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
						onStarClick={this.onStarClickRoom.bind(this)}
					/>
				</div>
				<div>
					<h2>Customer Service Rating: {this.state.customerServiceRating}</h2>
					<StarRatingComponent 
						name="customerservicerank" 
						starCount={3}
						value={this.state.customerServiceRating}
						onStarClick={this.onStarClickCustomer.bind(this)}
					/>
				</div>
				<div>
					<h2>Immersion Rating: {this.state.immersionRating}</h2>
					<StarRatingComponent 
						name="immersionrank" 
						starCount={3}
						value={this.state.immersionRating}
						onStarClick={this.onStarClickImmersion.bind(this)}
					/>
				</div>
				<div>
					<h2>Puzzle Quality Rating: {this.state.puzzleQualityRating}</h2>
					<StarRatingComponent 
						name="puzzlequalityrank" 
						starCount={3}
						value={this.state.puzzleQualityRating}
						onStarClick={this.onStarClickPuzzle.bind(this)}
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

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Stars;