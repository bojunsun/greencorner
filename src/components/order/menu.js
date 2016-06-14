import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

module.exports = React.createClass({
	render: function() {
		return (
			<View style={styles.container}>
				<Text>This is menu page</Text>
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