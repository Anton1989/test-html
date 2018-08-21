import React from 'react';
import connect from 'react-redux/lib/connect/connect';
//Components
import Navbar from '../components/Navigation.jsx';
import Footer from '../components/Footer.jsx';
import Menu from '../components/Menu.jsx';
import styles from './Layout.scss';

class Layout extends React.Component {

	render() {
		const { children } = this.props;

		return <React.Fragment>
			<Navbar />
			<div className={'container ' + styles.main}>
				{children}
			</div>
			<Menu />
			<Footer />
		</React.Fragment>
	}
}

function mapStateToProps(state, routerProps) {
	return {
		isActive: routerProps.router.isActive
	}
}

export default connect(mapStateToProps)(Layout)
