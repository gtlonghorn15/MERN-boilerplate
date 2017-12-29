import 'react-select/dist/react-select.css';
import 'rc-time-picker/assets/index.css';

import React, { Component } from 'react';
import Select from 'react-select';
import moment from 'moment';
import TimePicker from 'rc-time-picker';

const showHour = false;
const defaultTime = moment().minute(0).second(0);

var completedArr = [{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }];
var numArr = [{ value: '1', label: '1' }, { value: '2', label: '2' }, { value: '3', label: '3' }, { value: '4', label: '4' }, { value: '5', label: '5' }];

class Dropdown extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      completedOption: completedArr[0],
      numClueOption: numArr[0],
      groupSizeOption: numArr[0]
    };
    
    this.updateValueCompleted = this.updateValueCompleted.bind(this);
    this.updateValueNumClue = this.updateValueNumClue.bind(this);
    this.updateValueGroupSize = this.updateValueGroupSize.bind(this);
  }
  
  updateValueCompleted(newValue) {
     this.setState({ completedOption: newValue })
  }
  updateValueNumClue(newValue) {
     this.setState({ numClueOption: newValue })
  }
  updateValueGroupSize(newValue) {
     this.setState({ groupSizeOption: newValue })
  }
  
  render() {
    return (
      <div>
         <Select
           name="Room-Completed"
           value={this.state.completedOption}
           onChange={this.updateValueCompleted}
           options={completedArr}
         />
         <TimePicker
            style={{ width: 100 }}
            defaultValue={defaultTime}
            showHour={showHour}
         />
         <Select
           name="Number-Clues"
           value={this.state.numClueOption}
           onChange={this.updateValueNumClue}
           options={numArr}
         />
         <Select
           name="Group-Size"
           value={this.state.groupSizeOption}
           onChange={this.updateValueGroupSize}
           options={numArr}
         />
      </div>
    );
  }
}

export default Dropdown;