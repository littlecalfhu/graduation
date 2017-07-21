/**
 * Created by Administrator on 2017/5/2.
 */
import React,{component} from 'react'
import {withRouter} from 'react-router'
import QRcode from 'qrcode.react'
import Back from '../../../components/Back';
import $ from 'jquery';
import './Qrcode.scss'
/*
class Qrcode extends component {
  render() {
    return (
         <section className="myTicket">
           <div className="myTicketHeader">
           <p className="movieName">你的名字</p>
           <p className="movieTime">2017-04-30 14：30 ~ 16:46</p>
           <p className="site">山西剧院(VR主题影院)6厅</p>
           <p className="seat">11排3座</p>
           </div>
           <div className="myTicketQrcode">
           <QRcode value="http://www.baidu.com" bgColor="#FFFFFF" fgColor="#000000" size={250}/>
           </div>
           <Back router={router} />
         </section>
    )
  }
}
Qrcode.propTypes = {
  router: React.PropTypes.object.isRequired
}
*/
//let username = window.location.href.split("/")[3].split("=")[1].split("#")[0];
var query = {
  "username":username
}
var qrcodes = [];
$.ajaxSettings.async = false;
$.getJSON("http://localhost:2900/getqrcodelength",query,function (data) {
  qrcodes = JSON.parse(data[0].qrcodemessage).content;
  console.log(qrcodes);
})

const qrcodelist = qrcodes.map(function (item,index,array) {
      return(
        <li key={index.toString()} className="qrli">
          <section className="myTicket">
            <div className="myTicketHeader">
              <p className="movieName">{item.moviename}</p>
              <p className="movieTime">2016-{item.data}&nbsp;{item.begintime}-{item.endtime}</p>
              <p className="site">{item.location}{item.ting}</p>
              <p className="seat">{Math.floor(Math.random()*10)}排{Math.floor(Math.random()*20)}座</p>
            </div>
            <div className="myTicketQrcode">
              <QRcode value={JSON.stringify(item.username)+JSON.stringify(item.moviename)} bgColor="#FFFFFF" fgColor="#000000" size={250}/>
            </div>

          </section>
        </li>
      )
})
const Qrcode = ({router}) => {
  return (
   <section>
     <ul className="qrul">{qrcodelist}</ul>
     <Back router={router} />
   </section>
  )
}
export default withRouter(Qrcode);
