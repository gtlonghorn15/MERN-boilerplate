import React, { Component } from 'react';
import 'whatwg-fetch';
import ReactTable from 'react-table';
//import './RoomViewer.css'
import 'react-table/react-table.css';
import { Link } from 'react-router-dom';

const extract = (str, pattern) => (str.match(pattern) || []).pop() || '';
const extractAlphanum = (str) => extract(str, "[0-9a-zA-Z]+");
const limitLength = (str, length) => str.substring(0, length);

class RoomViewer extends Component {
   constructor(props) {
      super(props);

      this.state = {
         rooms: [],
         roomlocations: []
      };

      //this.handleChange = this.handleChange.bind(this);
      this.componentDidMount = this.componentDidMount.bind(this);
      this.newRoom = this.newRoom.bind(this);
      this.deleteRoom = this.deleteRoom.bind(this);
      this._modifyRoom = this._modifyRoom.bind(this);
      this.newRoomLocation = this.newRoomLocation.bind(this);
      this.deleteRoomLocation = this.deleteRoomLocation.bind(this);
      this._modifyRoomLocation = this._modifyRoomLocation.bind(this);
   }
   
   /*
   handleChange(event) {
      this.setState({roomName: limitLength(extractAlphanum(event.target.roomName), 25)});
      this.setState({roomAddress: limitLength(extractAlphanum(event.target.roomAddress), 25)});
   }
   */

   componentDidMount() {
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
   }

   newRoom() {
      fetch('/api/rooms', { method: 'POST' })
         .then(res => res.json())
         .then(json => {
            let data = this.state.rooms;
            data.push(json);

            this.setState({
               rooms: data
            });
         });
   }

   deleteRoom(index) {
      const id = this.state.rooms[index]._id;

      fetch(`/api/rooms/${id}`, { method: 'DELETE' })
         .then(_ => {
            this._modifyRoom(index, null);
         });
   }

   _modifyRoom(index, data) {
      let prevData = this.state.rooms;

      if (data) {
         prevData[index] = data;
      } else {
         prevData.splice(index, 1);
      }

      this.setState({
         rooms: prevData
      });
   }
   
   newRoomLocation() {
      fetch('/api/roomlocations', { method: 'POST' })
         .then(res => res.json())
         .then(json => {
            let data = this.state.roomlocations;
            data.push(json);

            this.setState({
               roomlocations: data
            });
         });
   }

   deleteRoomLocation(index) {
      const id = this.state.roomlocations[index]._id;

      fetch(`/api/roomlocations/${id}`, { method: 'DELETE' })
         .then(_ => {
            this._modifyRoomLocation(index, null);
         });
   }
   
   _modifyRoomLocation(index, data) {
      let prevData = this.state.roomlocations;

      if (data) {
         prevData[index] = data;
      } else {
         prevData.splice(index, 1);
      }

      this.setState({
         roomlocations: prevData
      });
   }

   render() {
      return (
         <div>
            <h1>Submit Room:</h1>

            <ul>
               { this.state.rooms.map((room, i) => (
                  <li key={i}>
                     <span>{room.name} </span>
                     <button onClick={() => this.deleteRoom(i)}>x</button>
                  </li>
               )) }
            </ul>
            <form target="_blank" method="post" action="/api/rooms">
               <p>Room Name: <input type="text" name="name" /></p>
               <p>Location Name: <select name="location_id">
                  { this.state.roomlocations.map((roomlocation, i) => (
                     <option key={i} value={roomlocation._id}>{roomlocation.name}</option>
                  )) }
               </select></p>
               <p>Time Available: <input type="number" name="time_available_minutes" /></p>
               <p>Max Players: <input type="number" name="max_players" /></p>
               <p>Min Players: <input type="number" name="min_players" /></p>
               <p>Completion Percentage: <input type="number" name="reported_completion_percentage" /></p>
               <p>Difficulty: <input type="number" name="reported_difficulty" /></p>
               <p>Price: <input type="number" name="price" /></p>
               <p>Room URL: <input type="text" name="room_URL" /></p>
               <p>Image URL: <input type="text" name="image_URL" /></p>
               <p>Notes: <input type="text" name="notes" /></p>
               <input type="submit" />
            </form>
            
            <h1>Submit Room Location:</h1>
            <ul>
               { this.state.roomlocations.map((roomlocation, i) => (
                  <li key={i}>
                     <span>{roomlocation.name} </span>
                     <button onClick={() => this.deleteRoomLocation(i)}>x</button>
                  </li>
               )) }
            </ul>
            <form target="_blank" method="post" action="/api/roomlocations">
               <p>Location Name: <input type="text" name="name" /></p>
               <p>Website: <input type="text" name="website" /></p>
               <p>Telephone: <input type="number" name="tel" /></p>
               <p>Email: <input type="text" name="email" /></p>
               <p>Address: <input type="text" name="address" /></p>
               <p>Booking URL: <input type="text" name="booking_URL" /></p>
               <input type="submit" />
            </form>
         </div>
      );
   }
}

export default SubmitRoom;
