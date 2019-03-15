import React, {Component} from 'react';

// import './Page1.css';
import style from './Page1.css';

import image from './images/yangerle.jpg';

export default class Page1 extends Component {
	render() {
		return (
				<div className={style.mix}>
					<h1 className="title">你好</h1>
					this is Page1~
					<img src={image} className={style.box}/>
				</div>
		)
	}
}