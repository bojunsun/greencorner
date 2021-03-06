import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput
} from 'react-native';
import GCFont from '../common/gcfont';
import Button from '../common/button';

module.exports = React.createClass({
	getInitialState: function() {
		return {
			username: '',
			password: '',
			passwordConfirm: ''
		};
	},
	render: function() {
		return (
			<View style={styles.container}>
				<Text style={GCFont.commonText}>Sign Up page</Text>
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
				<Text>Confirm Password: </Text>
				<TextInput
					secureTextEntry={true} 
					value={this.state.passwordConfirm}
					onChangeText={(text) => this.setState({passwordConfirm: text})}
					style={styles.input} 
				/>
				<Button  
					style={styles.signupButton}
					text={'Sign Up'} 
					textStyle={GCFont.buttonFont} 
					onPress={this.signupPress} 
				/>
				<Button  
					style={styles.signupButton}
					text={'Already have an account'} 
					textStyle={GCFont.buttonFont} 
					onPress={this.haveAccountPress} 
				/>
				<Button  
					style={styles.signupButton}
					text={'Return to dashboard'} 
					textStyle={GCFont.buttonFont} 
					onPress={this.returnDashPress} 
				/>
			</View>
		);
	},

	signupPress: function() {
		console.log("sign up press");
	},

	haveAccountPress: function() {
		this.props.navigator.push({name: 'login'});
	},

	returnDashPress: function() {
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