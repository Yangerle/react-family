import React from 'react';
import ReactDom from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import store from './redux/store';
import {BrowserRouter as Router} from 'react-router-dom';


// import getRouter from 'router/router';
import App from 'components/App/App';

/*初始化*/
renderWithHotReload(App);

/*热更新*/
if (module.hot) {
	module.hot.accept('./router/router', () => {
		// const getRouter = require('./router/router').default;
		// renderWithHotReload(getRouter());
		const NextApp = require('components/App/App').default;
		renderWithHotReload(NextApp);
	});
}

function renderWithHotReload(RootElement) {
	ReactDom.render(
			<AppContainer>
				<Provider store={store}>
					<Router>
						<RootElement/>
					</Router>
				</Provider>
			</AppContainer>,
			document.getElementById('app')
	)
}