import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

var completedArr = [{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }];
var timeArr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59];
var clueArr = [0,1,2,3,4,5,6,7,8,9];
var groupSizeArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

class Dropdown extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      completedOption: completedArr[0],
      timeMinOption: timeArr[0],
      timeSecOption: timeArr[0],
      numClueOption: sizeArr[0],
      groupSizeOption: sizeArr[0]
    };
    
    this.updateValueCompleted = this.updateValueCompleted.bind(this);
    this.updateValueTimeMin = this.updateValueTimeMin.bind(this);
    this.updateValueTimeSec = this.updateValueTimeSec.bind(this);
    this.updateValueNumClue = this.updateValueNumClue.bind(this);
    this.updateValueGroupSize = this.updateValueGroupSize.bind(this);
  }
  
  updateValueCompleted(newValue) {
     this.setState({ completedOption: newValue })
  }
  updateValueTimeMin(newValue) {
     this.setState({ timeMinOption: newValue })
  }
  updateValueTimeSec(newValue) {
     this.setState({ timeSecOption: newValue })
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
         <Select
           name="Time-Minutes"
           value={this.state.timeMinOption}
           onChange={this.updateValueTimeMin}
           options={timeArr}
         />
         <Select
           name="Time-Seconds"
           value={this.state.timeSecOption}
           onChange={this.updateValueTimeSec}
           options={timeArr}
         />
         <Select
           name="Number-Clues"
           value={this.state.numClueOption}
           onChange={this.updateValueNumClue}
           options={clueArr}
         />
         <Select
           name="Group-Size"
           value={this.state.groupSizeOption}
           onChange={this.updateValueGroupSize}
           options={groupSizeArr}
         />
      </div>
    );
  }
}

export default Dropdown;