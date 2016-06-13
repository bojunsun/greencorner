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
				<Text> Welcome page </Text> 
			</View>
		);
	}
});

var styles = StyleSheet.create({
	container: {
		flex: 1
	}
});