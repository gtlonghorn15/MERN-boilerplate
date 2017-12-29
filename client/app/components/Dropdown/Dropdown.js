import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

var options = [{ value: 'one', label: 'One' }, { value: 'two', label: 'Two' }];

class Dropdown extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      selectedOption: 'Start'
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.updateValue = this.updateValue.bind(this);
  }

  //handleChange = (selectedOption) => {
  handleChange(event) {
    this.setState({selectedOption:event.target.value});
    //console.log(`Selected: ${selectedOption.label}`);
    alert('Choice: ' + this.state.value);
  }
  
  updateValue(newValue) {
        this.setState({ selectedOption: newValue })
  }
  
  render() {
    return (
      <Select
        name="form-field-name"
        //value={this.state.selectedOption.value}
        value={this.state.selectedOption}
        onChange={this.updateValue}
        options={options}
      />
    );
  }
}

export default Dropdown;