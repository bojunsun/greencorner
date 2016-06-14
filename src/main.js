import React from 'react';
import {
  StyleSheet,
  Navigator
} from 'react-native';
import Dashboard from './components/authentication/dashboard';
import Menu from './components/order/menu';
import Signup from './components/authentication/signup';

var ROUTES = {
	dashboard: Dashboard,
	menu: Menu,
	signup: Signup
};

module.exports = React.createClass({
	render: function() {
		return (
			<Navigator 
				style={styles.container}
				initialRoute={{name: 'dashboard'}}
				renderScene={this.renderScene}
				configureScene={() => { return Navigator.SceneConfigs.FloatFromBottom; }}
			/>
		);
	},
	renderScene: function(route, navigator) {
		var Component = ROUTES[route.name];
		return <Component route={route} navigator={navigator}/>;
	}
});

var styles = StyleSheet.create({
	container: {
		flex: 1
	}
});