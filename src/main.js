import React from 'react';
import {
  StyleSheet,
  Navigator
} from 'react-native';
import Signup from './components/authentication/signup';

var ROUTES = {
	signup: Signup
};

module.exports = React.createClass({
	render: function() {
		return (
			<Navigator 
				style={styles.container}
				initialRoute={{name: 'signup'}}
				renderScene={this.renderScene}
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