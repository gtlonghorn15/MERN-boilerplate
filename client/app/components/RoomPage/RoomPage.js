import React, { Component } from 'react';
import 'whatwg-fetch';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { withRouter, Link } from 'react-router-dom'

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
      const filter_room = this.state.rooms.filter(room => room._id == id_test)
      const room_properties = filter_room.map((room,i) => (<li key={i}><span>{room.name}</span></li>))

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
