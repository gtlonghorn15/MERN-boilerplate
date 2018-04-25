import React, { Component } from 'react';
import 'whatwg-fetch';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { withRouter, Link } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';

class RoomPage extends Component {
   constructor(props) {
      super(props);

      this.state = {
         currentRoom: {},
         rooms: [],
         roomcompanies: [],
         roomlocations: []
      };

      //this.handleChange = this.handleChange.bind(this);
      this.componentDidMount = this.componentDidMount.bind(this);
      this.incrementRating = this.incrementRating.bind(this);
      this._modifyRoom = this._modifyRoom.bind(this);
   }
   
   /*
   handleChange(event) {
      this.setState({roomName: limitLength(extractAlphanum(event.target.roomName), 25)});
      this.setState({roomAddress: limitLength(extractAlphanum(event.target.roomAddress), 25)});
   }
   */

   componentDidMount() {

      //const { match: { params } } = this.props;
      //const { id } = this.props.match.params
      
      /*
      const {id} = this.props.match.params

      app.get('/api/rooms/${params.id}')
         .then(({ currentRoom }) => {
            console.log('currentRoom', currentRoom);
            this.setState({ currentRoom });
         });*/
         
      fetch('/api/rooms', { method: 'GET' })
         .then(res => res.json())
         .then(json => {
            this.setState({
               rooms: json
            });
         });
         
      fetch('/api/roomlocations', { method: 'GET' })
         .then(res => res.json())
         .then(json => {
            this.setState({
               roomlocations: json
            });
         });
         
      fetch('/api/roomcompanies', { method: 'GET' })
         .then(res => res.json())
         .then(json => {
            this.setState({
               roomcompanies: json
            });
         });
         
      fetch('/api/rooms/'+this.props.match.params.id, { method: 'GET' })
         .then(res => res.json())
         .then(json => {
            this.setState({
               currentRoom: json.data
            });
         });
    
   }
   
   incrementRating(index, num) {
      const {match} = this.props;
      const room_id = match.params.id;
      const find_room = this.state.rooms.filter(room => room._id == room_id);
      const id = find_room[index]._id;

      fetch(`/api/rooms/${id}/increment/${num}`, { method: 'PUT' })
         .then(res => res.json())
         .then(json => {
            this._modifyRoom(index, json);
         });
   }
   
   _modifyRoom(index, data) {
      const {match} = this.props;
      const room_id = match.params.id;
      const find_room = this.state.rooms.filter(room=> room_.id == room_id);
      //let prevData = this.state.rooms;
      let prevData = find_room;

      if (data) {
         prevData[index] = data;
      } else {
         prevData.splice(index, 1);
      }

      this.setState({
         rooms: prevData
      });
   }

   render() {
      const {match} = this.props
      const id_test = match.params.id
      var filter_room = this.state.rooms.filter(room => room._id == id_test)
      var location_id = filter_room.map(room => room.location_id)
      const filter_location = this.state.roomlocations.filter(roomloc => roomloc._id == location_id)
      //var company_id = filter_location.map(roomloc => roomloc.company_id)
      //const filter_company = this.state.roomcompanies.filter(roomcomp => roomcomp._id == company_id)

      return (
         <div>

            <ul>
               { filter_room.map((room, i) => (
                  <div key={i}>
                     <h1>Name: {room.name}</h1>
                     <li><strong>Average Rating (1-5):</strong> {room.total_rating / room.num_ratings}</li>
                     <li><strong>Time Available:</strong> {room.time_available_minutes} minutes</li>
                     <li><strong>Players:</strong> {room.min_players} - {room.max_players} players</li>
                     <li><strong>Completion Percentage:</strong> {room.reported_completion_percentage} percent</li>
                     <li><strong>Difficulty (1-5):</strong> {room.reported_difficulty}</li>
                     <li><strong>Price:</strong> {room.price} dollars</li>
                     <li><strong>Room Information:</strong> <Link target="_blank" to={{ pathname: room.room_URL}}>{room.room_URL}</Link></li>
                  </div>
               )) }
            </ul>
            
            <h1>Room Rating: </h1>
               
               <ul>
                  { filter_room.map((room, i) => (
                     <li key={i}>
                        <button onClick={() => this.incrementRating(i, 1)}>1</button>
                        <button onClick={() => this.incrementRating(i, 2)}>2</button>
                        <button onClick={() => this.incrementRating(i, 3)}>3</button>
                        <button onClick={() => this.incrementRating(i, 4)}>4</button>
                        <button onClick={() => this.incrementRating(i, 5)}>5</button>
                     </li>
                  )) }
               </ul>
            
            <h1>Location:</h1>
            <ul>
               { filter_location.map((roomloc, i) => (
                  <div key={i}>
                     <li><strong>Name:</strong> {roomloc.name}</li>
                     <li><strong>Website:</strong> <Link target="_blank" to={{ pathname: roomloc.website}}>{roomloc.website}</Link></li>
                     <li><strong>Booking URL:</strong> <Link target="_blank" to={{ pathname: roomloc.booking_URL}}>{roomloc.booking_URL}</Link></li>
                     <li><strong>Address:</strong> {roomloc.address}</li>
                     <li><strong>Telephone:</strong> {roomloc.tel}</li>
                     <li><strong>Email:</strong> {roomloc.email}</li>
                  </div>
               )) }
            </ul>
         </div>
      );
   }
}

export default withRouter(RoomPage)
