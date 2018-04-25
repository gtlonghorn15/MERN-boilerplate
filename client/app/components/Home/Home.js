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
   Header: 'Room ID',
   accessor: '_id',
   show: false
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
   Header: 'Completion Percentage (%)',
   accessor: 'reported_completion_percentage'
}, {
   Header: 'Difficulty (1-5)',
   accessor: 'reported_difficulty'
}, {
   Header: 'Price ($)',
   accessor: 'price'
}, {
   Header: 'Number of Ratings',
   accessor: 'num_ratings',
   show: false
}, {
   Header: 'Total Rating',
   accessor: 'total_rating',
   show: false
}, {
   Header: 'Average Rating (1-5)',
   accessor: 'total_rating',
   Cell: ({row}) =>(<span>{row.total_rating / row.num_ratings}</span>)
}, {
   Header: 'Room URL',
   accessor: 'room_URL',
   Cell: ({row}) => (<Link target="_blank" to={{ pathname: row.room_URL}}>{row.room_URL}</Link>)
}, {
   Header: 'Image URL',
   accessor: 'image_URL',
   show: false
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
         </div>
      );
   }
}

export default RoomViewer;
