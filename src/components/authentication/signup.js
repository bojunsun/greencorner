import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

module.exports = React.createClass({
	render: function() {
		return (
			<View style={styles.container}>
				<Text>Sign Up Page</Text>
			</View>
		);
	}
});

var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white'
	}
});