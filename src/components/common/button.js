import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native';
import GCFont from './gcfont';

module.exports = React.createClass({
	render: function(){
		return (
			<TouchableHighlight 
				style={this.props.style}
				underlayColor={'gray'}
				onPress={this.props.onPress}
				>
				<Text style={this.props.textStyle}>{this.props.text}</Text>
			</TouchableHighlight>
		);
	}
});
/*
var styles = StyleSheet.create({
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
		paddingHorizontal: 15,
		paddingVertical: 10,
		marginTop: 10,
		backgroundColor: '#fffafa'
	}
});
*/