import React, { Component } from 'react';
import 'whatwg-fetch';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { withRouter, Link } from 'react-router-dom';

const columns_custom = [{
   Header: 'Location Name',
   accessor: 'name'
}]

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

   render() {
      const {match} = this.props
      const id_test = match.params.id
      const filter_room = this.state.rooms.filter(room => room._id == id_test)
      var location_id = filter_room.map(room => room.location_id)
      const filter_location = this.state.roomlocations.filter(roomloc => roomloc._id == location_id)
      //var company_id = filter_location.map(roomloc => roomloc.company_id)
      //const filter_company = this.state.roomcompanies.filter(roomcomp => roomcomp._id == company_id)

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
            <ReactTable
               data={filter_location}
               columns={columns_custom}
               pageSize={2}
            />
            <h1>Location:</h1>
            <span>{location_id}</span>
            <ul>
               { filter_location.map((roomloc, i) => (
                  <div key={i}>
                     <li>Name: {roomloc.name}</li>
                     <li>Company ID: {roomloc.company_id}</li>
                     <li>Address ID: {roomloc.address_id}</li>
                  </div>
               )) }
            </ul>
         </div>
      );
   }
}

export default withRouter(RoomPage)
