import React, { Component } from 'react';
import 'whatwg-fetch';
import ReactTable from 'react-table';
//import './RoomViewer.css'
import 'react-table/react-table.css';
import { Link } from 'react-router-dom';

const extract = (str, pattern) => (str.match(pattern) || []).pop() || '';
const extractAlphanum = (str) => extract(str, "[0-9a-zA-Z]+");
const limitLength = (str, length) => str.substring(0, length);

const columns_room = [{
   Header: 'Escape Room Name',
   accessor: 'name',
   Cell: ({row}) => (<Link target="_blank" to={{ pathname: '/roompage/' + row._id}}>{row.name}</Link>)
}, {
   Header: 'Location ID',
   accessor: 'location_id'
}, {
   Header: 'Room ID',
   accessor: '_id'
}, {
   Header: 'Number of minutes',
   accessor: 'time_available_minutes'
}, {
   Header: 'Max Players',
   accessor: 'max_players'
}, {
   Header: 'Min Players',
   accessor: 'min_players'
}, {
   Header: 'Completion Percentage',
   accessor: 'reported_completion_percentage'
}, {
   Header: 'Difficulty',
   accessor: 'reported_difficulty'
}, {
   Header: 'Price',
   accessor: 'price'
}, {
   Header: 'Room URL',
   accessor: 'room_URL'
}, {
   Header: 'Image URL',
   accessor: 'image_URL'
}, {
   Header: 'Notes',
   accessor: 'notes'
}]

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

   render() {
      return (
         <div>
            <ReactTable
               data={this.state.rooms}
               columns={columns_room}
               pageSize={this.state.rooms.length}
            />
            <p>Rooms:</p>

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
         </div>
      );
   }
}

export default RoomViewer;
