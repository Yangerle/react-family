import React, {Component} from 'react';
import {increment, decrement, reset} from 'reduxs/actions/counter';

import {connect} from 'react-redux';

class Counter extends Component {
	render() {
		return (
				<div>
					<div>当前计数为{this.props.counter.count}</div>
					<button onClick={() => this.props.increment()}>自增
					</button>
					<button onClick={() => this.props.decrement()}>自减
					</button>
					<button onClick={() => this.props.reset()}>重置
					</button>
				</div>
		)
	}
}//UI组件，管理数据的逻辑已经被剥离到了容器组件reducer中，reducer是个纯函数（纯粹由参数决定返回值的函数）

const mapStateToProps = (state) => {
	return {
		counter: state.counter
	}
};//输出逻辑（相对于UI组件）

const mapDispatchToProps = (dispatch) => {
	return {
		increment: () => {
			dispatch(increment())
		},
		decrement: () => {
			dispatch(decrement())
		},
		reset: () => {
			dispatch(reset())
		}
	}
};//输入逻辑（相对于UI组件）

export default connect(mapStateToProps, mapDispatchToProps)(Counter);