import React, { Component } from 'react';
import 'whatwg-fetch';

const extract = (str, pattern) => (str.match(pattern) || []).pop() || '';
const extractAlphanum = (str) => extract(str, "[0-9a-zA-Z]+");
const limitLength = (str, length) => str.substring(0, length);

class RoomViewer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rooms: [],
      roomName: '',
      roomAddress: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.newRoom = this.newRoom.bind(this);
    this.deleteRoom = this.deleteRoom.bind(this);
    this._modifyRoom = this._modifyRoom.bind(this);
  }
  
  handleChange(event) {
    this.setState({roomName: limitLength(extractAlphanum(event.target.roomName), 25)});
    this.setState({roomAddress: limitLength(extractAlphanum(event.target.roomAddress), 25)});
  }

  componentDidMount() {
    fetch('/api/rooms')
      .then(res => res.json())
      .then(json => {
        this.setState({
          rooms: json
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
        <p>Rooms:</p>

        <ul>
          { this.state.rooms.map((room, i) => (
            <li key={i}>
              <span>{room.name} </span>
              <span>{room.address} </span>
              <button onClick={() => this.deleteRoom(i)}>x</button>
            </li>
          )) }
        </ul>
        <form method="post" action="/api/rooms">
          <input type="text" name="name" />
          <input type="text" name="address" />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default RoomViewer;
