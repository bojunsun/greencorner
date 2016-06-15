import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput
} from 'react-native';
import GCFont from '../common/gcfont';
import Button from '../common/button';
import Config from '../common/config';
import Api from '../common/api';

module.exports = React.createClass({
	getInitialState: function() {
		return {
			username: '',
			password: ''
		};
	},
	render: function() {
		return (
			<View style={styles.container}>
				<Text>This is Login page</Text>
				<Text>Username: </Text>
				<TextInput
					value={this.state.username}
					onChangeText={(text) => this.setState({username: text})}
					style={styles.input} 
				/>

				<Text>Password: </Text>
				<TextInput
					secureTextEntry={true} 
					value={this.state.password}
					onChangeText={(text) => this.setState({password: text})}
					style={styles.input} 
				/>

				<Button  
					style={styles.signupButton}
					text={'Log in'} 
					textStyle={GCFont.buttonFont} 
					onPress={this.loginPress} 
				/>

				<Button  
					style={styles.signupButton}
					text={'Return Sign Up'} 
					textStyle={GCFont.buttonFont} 
					onPress={this.returnSignupPress} 
				/>

			</View>
		);
	},
	loginPress: function() {
		Api.login(this.state.username, this.state.password).then((data) => {
			console.log(data);
		});
	},
	returnSignupPress: function() {
		this.props.navigator.pop();
	}
});

var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white'
	},
	input: {
		padding: 4,
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		borderRadius: 5,
		margin:5,
		width: 200,
		alignSelf: 'center'
	},
	signupButton: {
		backgroundColor: 'white',
		borderRadius: 5,
		paddingHorizontal: 130,
		paddingVertical: 15,
		marginTop: 10,
		borderWidth: 1,
		borderColor: 'grey'
	}
});