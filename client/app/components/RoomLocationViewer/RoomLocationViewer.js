import React, { Component } from 'react';
import 'whatwg-fetch';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const extract = (str, pattern) => (str.match(pattern) || []).pop() || '';
const extractAlphanum = (str) => extract(str, "[0-9a-zA-Z]+");
const limitLength = (str, length) => str.substring(0, length);

const columns_company = [{
   Header: 'Escape Room Company',
   accessor: 'name'
}, {
   Header: 'Company Website',
   accessor: 'website'
}, {
   Header: 'Company ID',
   accessor: '_id'
}]

const columns_location = [{
   Header: 'Location Name',
   accessor: 'name'
}, {
   Header: 'Company ID',
   accessor: 'company_id'
}, {
   Header: 'Location Website',
   accessor: 'website'
}, {
   Header: 'Location Phone Number',
   accessor: 'tel'
}, {
   Header: 'Location Email',
   accessor: 'email'
},  {
   Header: 'Address',
   accessor: 'address'
},
   Header: 'Booking URL',
   accessor: 'booking_URL'
}]

class RoomLocationViewer extends Component {
   constructor(props) {
      super(props);

      this.state = {
         roomlocations: [],
         roomcompanies: []
      };

      this.componentDidMount = this.componentDidMount.bind(this);
      this.newRoomLocation = this.newRoomLocation.bind(this);
      this.newRoomCompany = this.newRoomCompany.bind(this);
      this.deleteRoomLocation = this.deleteRoomLocation.bind(this);
      this.deleteRoomCompany = this.deleteRoomCompany.bind(this);
      this._modifyRoomLocation = this._modifyRoomLocation.bind(this);
      this._modifyRoomCompany = this._modifyRoomCompany.bind(this);
   }

   componentDidMount() {
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
   
   newRoomCompany() {
      fetch('/api/roomcompanies', { method: 'POST' })
         .then(res => res.json())
         .then(json => {
            let data = this.state.roomcompanies;
            data.push(json);

            this.setState({
               roomcompanies: data
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
   
   deleteRoomCompany(index) {
      const id = this.state.roomcompanies[index]._id;

      fetch(`/api/roomcompanies/${id}`, { method: 'DELETE' })
         .then(_ => {
            this._modifyRoomCompany(index, null);
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
   
   _modifyRoomCompany(index, data) {
      let prevData = this.state.roomcompanies;

      if (data) {
         prevData[index] = data;
      } else {
         prevData.splice(index, 1);
      }

      this.setState({
         roomcompanies: prevData
      });
   }

   render() {
      return (
         <div>
            <ReactTable
               data={this.state.roomlocations}
               columns={columns_location}
            />
            <p>Room Locations:</p>
            <ul>
               { this.state.roomlocations.map((roomlocation, i) => (
                  <li key={i}>
                     <span>{roomlocation.name} </span>
                     <button onClick={() => this.deleteRoomLocation(i)}>x</button>
                  </li>
               )) }
            </ul>
            <form target="_blank" method="post" action="/api/roomlocations">
               <span>Location Name: <input type="text" name="name" /></span>
               <span>Company Name: <select name="company_id">
                  { this.state.roomcompanies.map((roomcompany, i) => (
                     <option key={i} value={roomcompany._id}>{roomcompany.name}</option>
                  )) }
               </select></span>
               <span>Website: <input type="text" name="website" /></span>
               <span>Telephone: <input type="number" name="tel" /></span>
               <span>Email: <input type="text" name="email" /></span>
               <span>Address: <input type="text" name="address" /></span>
               <span>Booking URL: <input type="text" name="booking_URL" /></span>
               <input type="submit" />
            </form>
            <ReactTable
               data={this.state.roomcompanies}
               columns={columns_company}
            />
            <p>Room Companies:</p>
            <ul>
               { this.state.roomcompanies.map((roomcompany, i) => (
                  <li key={i}>
                     <span>{roomcompany.name} </span>
                     <button onClick={() => this.deleteRoomCompany(i)}>x</button>
                  </li>
               )) }
            </ul>
            <form target="_blank" method="post" action="/api/roomcompanies">
               <input type="text" name="name" />
               <input type="text" name="website" />
               <input type="submit" />
            </form>
         </div>
      );
   }
}

export default RoomLocationViewer;
