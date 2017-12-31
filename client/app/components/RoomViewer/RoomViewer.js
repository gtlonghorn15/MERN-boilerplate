import React, { Component } from 'react';
import 'whatwg-fetch';

class RoomViewer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rooms: []
    };

    this.newRoom = this.newRoom.bind(this);
    //this.incrementCounter = this.incrementCounter.bind(this);
    //this.decrementCounter = this.decrementCounter.bind(this);
    this.deleteRoom = this.deleteRoom.bind(this);

    this._modifyRoom = this._modifyRoom.bind(this);
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

  /*
  incrementCounter(index) {
    const id = this.state.counters[index]._id;

    fetch(`/api/counters/${id}/increment`, { method: 'PUT' })
      .then(res => res.json())
      .then(json => {
        this._modifyCounter(index, json);
      });
  }

  decrementCounter(index) {
    const id = this.state.counters[index]._id;

    fetch(`/api/counters/${id}/decrement`, { method: 'PUT' })
      .then(res => res.json())
      .then(json => {
        this._modifyCounter(index, json);
      });
  }
  */

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

        <form action="/api/rooms" method="post">
          <label for="room_name">Enter name: </label>
          <input id="room_name" type="text" name="name" value="Default name for room." />
          <input type="submit" value="OK" />
        </form>
      </div>
    );
  }
}

export default RoomViewer;
