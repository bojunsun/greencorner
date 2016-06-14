import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Button from '../common/button';

module.exports = React.createClass({
	render: function() {
		return (
			<View style={styles.container}>
				<Image style={styles.backgroundImage} source={require('../../images/home/home2.jpg')}>
					<Text style={styles.headerText}> What's in Season</Text>
				</Image>
				<View style={styles.centerBox}>
					<Text style={styles.commonText}>My GreenCorner</Text>
				</View>
			</View>
		);
	}
});

var styles = StyleSheet.create({
	container: {
		flex: 1
	},
	backgroundImage: {
		flex: 5,
		width: null,
		height: null,
		justifyContent: 'center',
		alignItems: 'center'
	},
	headerText: {
		fontSize: 30,
		color: '#f5fffa',
		alignSelf: 'center' 
	},
	centerBox: {
		flex: 5,
		backgroundColor: '#fffafa',
		justifyContent: 'center',
		alignItems: 'center'
	},
	commonText: {
		fontSize: 20,
		color: '#778899',
		alignSelf: 'center'
	}
});