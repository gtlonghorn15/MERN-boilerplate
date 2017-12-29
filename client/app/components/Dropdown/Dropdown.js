import React, { Component } from 'react';
import Select from 'react-select';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      selectedOption: ''
    };
    
    this.handleChange = this.handleChange.bind(this);
  }

  //handleChange = (selectedOption) => {
  handleChange(event) {
    this.setState({selectedOption});
    console.log(`Selected: ${selectedOption.label}`);
  }
  
  render() {
    return (
      <Select
        name="form-field-name"
        value={this.state.selectedOption.value}
        onChange={this.handleChange}
        options={[
          { value: 'one', label: 'One' },
          { value: 'two', label: 'Two' },
        ]}
      />
    );
  }
}

export default Dropdown;