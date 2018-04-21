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
      //const room_array = this.state.rooms.map((room) => <li key={room_.id}>{room.name}</li>)
      //const room_array = this.state.rooms.map(room => ({value: room._id, text: room.name}))
      const filter_room = this.state.rooms.filter(room => room._id == id_test)
      const room_properties = filter_room.map((room,i) => (<li key={i}><span>{room.name}</span></li>))
      //var data_test = jQuery.parseJSON(this.state.rooms)
      //var index_test = data_test.map(function(d) { return d['name']; }).indexOf('test')
      //const room_test = _.findWhere(this.state.rooms, {id: id_test})
      //room_test = this.state.rooms.find(item => item.name === 'test')
      //const room = this.state.rooms[index]._id;
      //foo.results.find(item => item.id === 2)
      return (
         <div>
            <h1>Room:</h1>

            <ul>
               { filter_room.map((room, i) => (
                  <div key={i}>
                     <li>Name: {room.name}</li>
                     <li>Location ID: {room.location_id}</li>
                     <li>Time Available: {room.time_available_minutes}</li>
                     <li>Max Players: {room.max_players}</li>
                     <li>Completion Percentage: {room.reported_completion_percentage}</li>
                     <li>Difficulty: {room.reported_difficulty}</li>
                  </div>
               )) }
            </ul>
         </div>
      );
   }
}

export default withRouter(RoomPage)
