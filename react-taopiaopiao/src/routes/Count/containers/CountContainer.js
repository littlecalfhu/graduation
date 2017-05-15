/**
 * Created by Administrator on 2017/5/8.
 */
import {onIncreseClick} from '../../../store/count'
import {connect} from 'react-redux'
import Count from '../components/Count'
const mapDispitchtoProps ={
  onIncreseClick
}

const mapStatetoProps = (state) =>(
  {
    count:state.count
  }
)
export default connect(mapStatetoProps,mapDispitchtoProps)(Count);
