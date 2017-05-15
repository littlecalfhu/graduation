/**
 * Created by Administrator on 2017/5/8.
 */
import React,{Component,PropTypes} from 'react'

export default class Count extends Component{
  render(){
    const {value,onIncreaseClick} = this.props;
    return(
      <div>
        <span>{value}</span>
        <button onClick={onIncreaseClick}>Increase</button>
      </div>
    );
  }
}
Count.PropTypes = {
  value:PropTypes.number.isRequired,
  onIncreaseClick:PropTypes.func.isRequired
}
