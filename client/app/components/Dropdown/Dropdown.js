import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

var options = [{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }];

class Dropdown extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      selectedOption: options[0]
    };
    
    this.updateValue = this.updateValue.bind(this);
  }
  
  updateValue(newValue) {
     this.setState({ selectedOption: newValue })
     alert('Choice: ' + this.state.selectedOption.value);
  }
  
  render() {
    return (
      <Select
        name="Room-Completed"
        value={this.state.selectedOption}
        onChange={this.updateValue}
        options={options}
      />
    );
  }
}

export default Dropdown;