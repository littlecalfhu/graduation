import React from 'react';
import { Link, withRouter } from 'react-router';
import { List } from 'antd-mobile';
import Back from '../../../components/Back';
import './MeView.scss'
const Item = List.Item;
const Brief = Item.Brief;

function link (router) {
	router.push('/no');
}
function linkToQrcode(router) {
  router.push('/qrcode')
}
let username = window.location.href.split("/")[3].split("=")[1].split("#")[0];
const Me = ({router}) => {
	return (
		<section>
      <div className="Meheader">
          <div className="touXiang"></div>
          <div className="user_wrap">
            <span className="user">{username}</span>
          </div>
      </div>
			<List>
				<Item className="item" extra="" arrow="horizontal" onClick={() => {linkToQrcode(router)}}>我的电影票</Item>
				<Item className="item" extra="" arrow="horizontal" onClick={() => {link(router)}}>优惠券</Item>
				<Item className="item" extra="" arrow="horizontal" onClick={() => {link(router)}}>兑换券</Item>
				<Item className="item" extra="" arrow="horizontal" onClick={() => {link(router)}}>帮助中心</Item>
			</List>
		</section>
	)
}

export default withRouter(Me);
