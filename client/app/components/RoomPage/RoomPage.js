import React, { Component } from 'react';
import 'whatwg-fetch';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { withRouter } from 'react-router-dom'

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
         currentRoom: {},
         rooms: []
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
         
      fetch('/api/rooms/'+this.props.match.params.id, { method: 'GET' })
         .then(res => res.json())
         .then(json => {
            this.setState({
               currentRoom: json.data
            });
         });
    
   }

   render() {
      const {match} = this.props
      const id_test = match.params.id
      //var data_test = jQuery.parseJSON(this.state.rooms)
      //var index_test = data_test.map(function(d) { return d['name']; }).indexOf('test')
      //const room_test = _.findWhere(this.state.rooms, {id: id_test})
      //room_test = this.state.rooms.find(item => item.name === 'test')
      //const room = this.state.rooms[index]._id;
      //foo.results.find(item => item.id === 2)
      return (
         <div>
            <h1>Room:</h1>
            <p>Hello World</p>
            <span>{id_test}</span>
            <p>Current Room:</p>
            <span>{this.state.rooms.length}</span>
            
            <p>Rooms:</p>

            <ul>
               { this.state.rooms.map((room, i) => (
                  <li key={i}>
                     <span>{room.name}</span>
                     <span>{room._id}</span>
                  </li>
               )) }
            </ul>
         </div>
      );
   }
}

export default withRouter(RoomPage)
