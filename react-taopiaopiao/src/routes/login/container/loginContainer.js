/**
 * Created by huyifan on 2017/7/20.
 */
import Login from '../component/login'
import React,{Component} from 'react'
import connect from 'react-redux'
class LoginContainer extends Component{
  constructor(props){
    super(props);
  }
}
const mapStateToProps = (state)=>({
  login:state.login
});
const mapDispatchToProps = (dispatch)=>{
  return {
    actions:bindActionCreator(Actions,dispatch)
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(LoginContainer);
