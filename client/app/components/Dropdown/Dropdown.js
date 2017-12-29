import 'react-select/dist/react-select.css';
import 'rc-time-picker/assets/index.css';

import React, { Component } from 'react';
import Select from 'react-select';
import moment from 'moment';
import TimePicker from 'rc-time-picker';

const showHour = false;
const showMinute = false;
const showSecond = false;
const defaultTime = moment().minute(0).second(0);
const defaultClues = moment().hour(0);
const defaultGroupSize = moment().hour(2);
const hideDisabledOptions = true;
const allowEmpty = false;
var disabledClues = [11,12,13,14,15,16,17,18,19,20,21,22,23];
var disabledGroupSize = [0,16,17,18,19,20,21,22,23];

var completedArr = [{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }];

class Dropdown extends Component {
  constructor() {
    super();
    
    this.state = {
      completedOption: completedArr[0]
    };
    
    this.updateValueCompleted = this.updateValueCompleted.bind(this);    
  }
  
  updateValueCompleted(newValue) {
     this.setState({ completedOption: newValue })
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
            name="Time-Remaining"
            style={{ width: 50 }}
            defaultValue={defaultTime}
            showHour={showHour}
            hideDisabledOptions={hideDisabledOptions}
            allowEmpty={allowEmpty}
         />
         <br/>
         <TimePicker
            name="Number-Clues"
            style={{ width: 50 }}
            defaultValue={defaultClues}
            showMinute={showMinute}
            showSecond={showSecond}
            hideDisabledOptions={hideDisabledOptions}
            allowEmpty={allowEmpty}
            disabledHours={() => disabledClues}
         />
         <br/>
         <TimePicker
            name="Group-Size"
            style={{ width: 50 }}
            defaultValue={defaultGroupSize}
            showMinute={showMinute}
            showSecond={showSecond}
            hideDisabledOptions={hideDisabledOptions}
            allowEmpty={allowEmpty}
            disabledHours={() => disabledGroupSize}
         />
      </div>
    );
  }
}

export default Dropdown;
