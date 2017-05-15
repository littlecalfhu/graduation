import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import $ from 'jquery'
import './Period.scss';

export default class Period extends Component {
    constructor (props) {
        super(props);
        this.state = {
            num: 0
        }
    }

    selectDate (event) {
        let num = +event.target.getAttribute('data-num');
        if (true) {
            this.setState({
                num: num
            })
        }
    }

    componentDidMount(){
      var that = this;
      $('#period').find('.abs:contains("购买")').click(function (e) {
       let datatime = ["12-16","12-17","12-18","12-19"];
       let moviename = $('#sel-film').find('p').text();
       let nowtime = datatime[that.state.num];
       let $liwrap = $(e.target).closest('li');
       let begintime = $liwrap.find('.fb').text().slice(0,5);
       let money = $liwrap.find('.prf').text().slice(0,5);
       let endtime = $liwrap.find('.f2').text().slice(0,5);
       let ting = $liwrap.find('.f3').text();
       let language = $liwrap.find('.f1').text();
       let location = $("#location").text();
       let username = window.location.href.split("/")[3].split("=")[1].split("#")[0];
       console.log(username);
       let qrcode = {
       "username":username,
       "location":location,
       "moviename":moviename,
       "data":nowtime,
       "begintime":begintime,
       "endtime":endtime,
       "money":money,
       "ting":ting,
       "language":language
       }
       var num = 1;
       $.getJSON("http://localhost:2900/getqrcodelength",{"username":qrcode.username},function (data) {
         var obj = null;
         console.log(data);
         if(!data[0].qrcodemessage){
           obj = {
             "num":1,
             "content":[qrcode]
           }
         }else{
           obj= JSON.parse(data[0].qrcodemessage);
           if(obj.num){
             num += parseInt(obj.num);
             obj.num = num;
             obj.content.push(qrcode);
           }else{
             obj = {
               "num":1,
               "content":[qrcode]
             }
           }
         }
         var qrcodejson = JSON.stringify(obj);
         $.getJSON("http://localhost:2900/buyTicket",{"qrcodejson":qrcodejson},function (data) {
           if(data){
                console.log("购票成功");
                browserHistory.push("/qrcode");
           }
         })
       })
       })
    }
    render () {
        return (
        	<section id="period" ref="period">
                <section className="sel-date rel" onClick={this.selectDate.bind(this)}>
                    <ul className="rel">
                        <li data-num="0">
                            <span data-num="0">明天 12-16</span>
                            <span data-num="0" className="font-icon">惠</span>
                        </li>
                        <li data-num="1">
                            <span data-num="1">后天 12-17</span>
                            <span data-num="1" className="font-icon">惠</span>
                        </li>
                        <li data-num="2">
                            <span data-num="2">周五 12-18</span>
                            <span data-num="2" className="font-icon">惠</span>
                        </li>
                        <li data-num="3">
                            <span data-num="3">周六 12-19</span>
                            <span data-num="3" className="font-icon">惠</span>
                        </li>
                    </ul>
                    <span className="move abs" style={{left: `${1.8*this.state.num}rem`}}></span>
                </section>
                <div className="tips">温馨提示:开场前15分钟关闭在线售票</div>
                <section className="play-date">
                    <section style={{display: this.state.num === 0 ? 'block' : 'none'}}>
                        <div className="line">
                            <span className="ll le vm"></span>
                            <i className="ic nd vm"></i>
                            <em className="lef">下午场</em>
                            <span className="lr le vm"></span>
                        </div>
                        <ul className="pdate">
                            <li>
                                <div className="pd pd-l fl">
                                    <div>
                                        <em className="fb">12:30</em>
                                        <span className="fo f1">国语 3D</span>
                                    </div>
                                    <div>
                                        <span className="fo f2">14:14 散场</span>
                                        <span className="fo f3">一号厅</span>
                                    </div>
                                </div>
                                <div className="pd pd-r fr rel">
                                    <div className="pr-l">
                                        <em className="fb prf">¥18.8</em>
                                        <span className="fo f4">¥50</span>
                                        <span className="label-mod label-orange">新人专享</span>
                                    </div>
                                  <button className="btn b-btn p-btn abs">购买</button>
                                </div>
                            </li>
                            <li>
                                <div className="pd pd-l fl">
                                    <div>
                                        <em className="fb">14:30</em>
                                        <span className="fo f1">国语 3D</span>
                                    </div>
                                    <div>
                                        <span className="fo f2">16:14 散场</span>
                                        <span className="fo f3">三号厅</span>
                                    </div>
                                </div>
                                <div className="pd pd-r fr rel">
                                    <div className="pr-l">
                                        <em className="fb prf">¥18.8</em>
                                        <span className="fo f4">¥50</span>
                                        <span className="label-mod label-orange">新人专享</span>
                                    </div>
                                    <button className="btn b-btn p-btn abs">购买</button>
                                </div>
                            </li>
                            <li>
                                <div className="pd pd-l fl">
                                    <div>
                                        <em className="fb">16:30</em>
                                        <span className="fo f1">国语 3D</span>
                                    </div>
                                    <div>
                                        <span className="fo f2">18:14 散场</span>
                                        <span className="fo f3">三号厅</span>
                                    </div>
                                </div>
                                <div className="pd pd-r fr rel">
                                    <div className="pr-l">
                                        <em className="fb prf">¥18.8</em>
                                        <span className="fo f4">¥50</span>
                                        <span className="label-mod label-orange">新人专享</span>
                                    </div>
                                    <button className="btn b-btn p-btn abs">购买</button>
                                </div>
                            </li>
                        </ul>
                        <div className="line">
                            <span className="ll le vm"></span>
                            <i className="ic ad vm"></i>
                            <em className="lef">晚上场</em>
                            <span className="lr le vm"></span>
                        </div>
                        <ul className="pdate">
                            <li>
                                <div className="pd pd-l fl">
                                    <div>
                                        <em className="fb">19:30</em>
                                        <span className="fo f1">国语 3D</span>
                                    </div>
                                    <div>
                                        <span className="fo f2">21:14 散场</span>
                                        <span className="fo f3">三号厅</span>
                                    </div>
                                </div>
                                <div className="pd pd-r fr rel">
                                    <div className="pr-l">
                                        <em className="fb prf">¥18.8</em>
                                        <span className="fo f4">¥50</span>
                                        <span className="label-mod label-orange">新人专享</span>
                                    </div>
                                    <button className="btn b-btn p-btn abs">购买</button>
                                </div>
                            </li>
                            <li>
                                <div className="pd pd-l fl">
                                    <div>
                                        <em className="fb">22:30</em>
                                        <span className="fo f1">国语 3D</span>
                                    </div>
                                    <div>
                                        <span className="fo f2">0:14 散场</span>
                                        <span className="fo f3">三号厅</span>
                                    </div>
                                </div>
                                <div className="pd pd-r fr rel">
                                    <div className="pr-l">
                                        <em className="fb prf">¥18.8</em>
                                        <span className="fo f4">¥50</span>
                                        <span className="label-mod label-orange">新人专享</span>
                                    </div>
                                    <button className="btn b-btn p-btn abs">购买</button>
                                </div>
                            </li>
                        </ul>
                    </section>
                    <section style={{display: this.state.num === 1 ? 'block' : 'none'}}>
                        <div className="line">
                            <span className="ll le vm"></span>
                            <i className="ic md vm"></i>
                            <em className="lef">上午场</em>
                            <span className="lr le vm"></span>
                        </div>
                        <ul className="pdate">
                            <li>
                                <div className="pd pd-l fl">
                                    <div>
                                        <em className="fb">10:30</em>
                                        <span className="fo f1">国语 3D</span>
                                    </div>
                                    <div>
                                        <span className="fo f2">12:14 散场</span>
                                        <span className="fo f3">三号厅</span>
                                    </div>
                                </div>
                                <div className="pd pd-r fr rel">
                                    <div className="pr-l">
                                        <em className="fb prf">¥18.8</em>
                                        <span className="fo f4">¥50</span>
                                        <span className="label-mod label-orange">新人专享</span>
                                    </div>
                                    <button className="btn b-btn p-btn abs">购买</button>
                                </div>
                            </li>
                        </ul>
                        <div className="line">
                            <span className="ll le vm"></span>
                            <i className="ic nd vm"></i>
                            <em className="lef">下午场</em>
                            <span className="lr le vm"></span>
                        </div>
                        <ul className="pdate">
                            <li>
                                <div className="pd pd-l fl">
                                    <div>
                                        <em className="fb">12:30</em>
                                        <span className="fo f1">国语 3D</span>
                                    </div>
                                    <div>
                                        <span className="fo f2">14:14 散场</span>
                                        <span className="fo f3">一号厅</span>
                                    </div>
                                </div>
                                <div className="pd pd-r fr rel">
                                    <div className="pr-l">
                                        <em className="fb prf">¥18.8</em>
                                        <span className="fo f4">¥50</span>
                                        <span className="label-mod label-orange">新人专享</span>
                                    </div>
                                    <button className="btn b-btn p-btn abs">购买</button>
                                </div>
                            </li>
                            <li>
                                <div className="pd pd-l fl">
                                    <div>
                                        <em className="fb">14:30</em>
                                        <span className="fo f1">国语 3D</span>
                                    </div>
                                    <div>
                                        <span className="fo f2">16:14 散场</span>
                                        <span className="fo f3">三号厅</span>
                                    </div>
                                </div>
                                <div className="pd pd-r fr rel">
                                    <div className="pr-l">
                                        <em className="fb prf">¥18.8</em>
                                        <span className="fo f4">¥50</span>
                                        <span className="label-mod label-orange">新人专享</span>
                                    </div>
                                    <button className="btn b-btn p-btn abs">购买</button>
                                </div>
                            </li>
                            <li>
                                <div className="pd pd-l fl">
                                    <div>
                                        <em className="fb">16:30</em>
                                        <span className="fo f1">国语 3D</span>
                                    </div>
                                    <div>
                                        <span className="fo f2">18:14 散场</span>
                                        <span className="fo f3">三号厅</span>
                                    </div>
                                </div>
                                <div className="pd pd-r fr rel">
                                    <div className="pr-l">
                                        <em className="fb prf">¥18.8</em>
                                        <span className="fo f4">¥50</span>
                                        <span className="label-mod label-orange">新人专享</span>
                                    </div>
                                    <button className="btn b-btn p-btn abs">购买</button>
                                </div>
                            </li>
                        </ul>
                        <div className="line">
                            <span className="ll le vm"></span>
                            <i className="ic ad vm"></i>
                            <em className="lef">晚上场</em>
                            <span className="lr le vm"></span>
                        </div>
                        <ul className="pdate">
                            <li>
                                <div className="pd pd-l fl">
                                    <div>
                                        <em className="fb">19:30</em>
                                        <span className="fo f1">国语 3D</span>
                                    </div>
                                    <div>
                                        <span className="fo f2">21:14 散场</span>
                                        <span className="fo f3">三号厅</span>
                                    </div>
                                </div>
                                <div className="pd pd-r fr rel">
                                    <div className="pr-l">
                                        <em className="fb prf">¥18.8</em>
                                        <span className="fo f4">¥50</span>
                                        <span className="label-mod label-orange">新人专享</span>
                                    </div>
                                    <button className="btn b-btn p-btn abs">购买</button>
                                </div>
                            </li>
                            <li>
                                <div className="pd pd-l fl">
                                    <div>
                                        <em className="fb">22:30</em>
                                        <span className="fo f1">国语 3D</span>
                                    </div>
                                    <div>
                                        <span className="fo f2">0:14 散场</span>
                                        <span className="fo f3">三号厅</span>
                                    </div>
                                </div>
                                <div className="pd pd-r fr rel">
                                    <div className="pr-l">
                                        <em className="fb prf">¥18.8</em>
                                        <span className="fo f4">¥50</span>
                                        <span className="label-mod label-orange">新人专享</span>
                                    </div>
                                    <button className="btn b-btn p-btn abs">购买</button>
                                </div>
                            </li>
                        </ul>
                    </section>
                    <section style={{display: this.state.num === 2 ? 'block' : 'none'}}>
                        <div className="line">
                            <span className="ll le vm"></span>
                            <i className="ic ad vm"></i>
                            <em className="lef">晚上场</em>
                            <span className="lr le vm"></span>
                        </div>
                        <ul className="pdate">
                            <li>
                                <div className="pd pd-l fl">
                                    <div>
                                        <em className="fb">19:30</em>
                                        <span className="fo f1">国语 3D</span>
                                    </div>
                                    <div>
                                        <span className="fo f2">21:14 散场</span>
                                        <span className="fo f3">三号厅</span>
                                    </div>
                                </div>
                                <div className="pd pd-r fr rel">
                                    <div className="pr-l">
                                        <em className="fb prf">¥18.8</em>
                                        <span className="fo f4">¥50</span>
                                        <span className="label-mod label-orange">新人专享</span>
                                    </div>
                                    <button className="btn b-btn p-btn abs">购买</button>
                                </div>
                            </li>
                            <li>
                                <div className="pd pd-l fl">
                                    <div>
                                        <em className="fb">22:30</em>
                                        <span className="fo f1">国语 3D</span>
                                    </div>
                                    <div>
                                        <span className="fo f2">0:14 散场</span>
                                        <span className="fo f3">三号厅</span>
                                    </div>
                                </div>
                                <div className="pd pd-r fr rel">
                                    <div className="pr-l">
                                        <em className="fb prf">¥18.8</em>
                                        <span className="fo f4">¥50</span>
                                        <span className="label-mod label-orange">新人专享</span>
                                    </div>
                                    <button className="btn b-btn p-btn abs">购买</button>
                                </div>
                            </li>
                        </ul>
                    </section>
                    <section style={{display: this.state.num === 3 ? 'block' : 'none'}}>
                        <div className="line">
                            <span className="ll le vm"></span>
                            <i className="ic md vm"></i>
                            <em className="lef">上午场</em>
                            <span className="lr le vm"></span>
                        </div>
                        <ul className="pdate">
                            <li>
                                <div className="pd pd-l fl">
                                    <div>
                                        <em className="fb">10:30</em>
                                        <span className="fo f1">国语 3D</span>
                                    </div>
                                    <div>
                                        <span className="fo f2">12:14 散场</span>
                                        <span className="fo f3">三号厅</span>
                                    </div>
                                </div>
                                <div className="pd pd-r fr rel">
                                    <div className="pr-l">
                                        <em className="fb prf">¥18.8</em>
                                        <span className="fo f4">¥50</span>
                                        <span className="label-mod label-orange">新人专享</span>
                                    </div>
                                    <button className="btn b-btn p-btn abs">购买</button>
                                </div>
                            </li>
                        </ul>
                    </section>
                </section>
            </section>
        )
  }
}
