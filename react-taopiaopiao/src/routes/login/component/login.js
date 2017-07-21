/**
 * Created by huyifan on 2017/7/20.
 */
import React,{Component} from 'react';
import {Form,Icon,Input,Button,Checkbox} from 'antd'
const FormItem = Form.Item
export class Login extends Component{
  constructor(props){
    super(props);
    this.state ={
      username:'',
      password:''
    }
  }
  handleSubmit(){

  }
  render(){
    const {getFieldDecorator} = this.props.form;
    return(
      <Form onSubmit={this.handleSubmit} className = "login-form">
        <FormItem>
          {getFieldDecorator('username',{
            rules:[{required: true,message: 'please input your username'}],
          })(
            <Input prefix = {<Icon type="lock" style={{fontSize:13}}/>} placeholder = 'username'/>
          )
          }
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className="login-form-forgot" href="">Forgot password</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="">register now!</a>
        </FormItem>
      </Form>
    )
  }
}
const WrappedNormalLoginForm = Form.create()(Login);
export default WrappedNormalLoginForm;
