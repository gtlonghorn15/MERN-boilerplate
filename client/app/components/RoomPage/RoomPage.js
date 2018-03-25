import React, { Component } from 'react';
import 'whatwg-fetch';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const columns_room = [{
   Header: 'Escape Room Name',
   accessor: 'name'
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
}]

class RoomPage extends Component {
   constructor(props) {
      super(props);

      this.state = {
         rooms: [],
         roomlocations: []
      };

      //this.handleChange = this.handleChange.bind(this);
      this.componentDidMount = this.componentDidMount.bind(this);
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

   render() {
      return (
         <div>
            <h1>Room:</h1>
            <p>Hello World</p>
         </div>
      );
   }
}

export default RoomPage;
