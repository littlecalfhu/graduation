import React, { Component } from 'react';
import { withRouter,Link} from 'react-router';
import Back from '../../../components/Back';
import './NoDataView.scss';

const No = ({router}) => {
	return (
		<section>
      <button><Link to="/qrcode">显示二维码</Link></button>
			<Back router={router} />
		</section>
	)
}

export default withRouter(No);
