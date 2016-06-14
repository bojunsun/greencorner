import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import Button from '../common/button';
import GCFont from '../common/gcfont';

module.exports = React.createClass({
	render: function() {
		return (
			<View style={styles.container}>
				<Image style={styles.backgroundImage} source={require('../../images/home/home2.jpg')}>
					<View style={{flex: 4}}>
						<Text style={styles.bannerText}> Green Corner</Text>
					</View>
					<View >
						<Text style={styles.headerText}> What's in Season</Text>
					</View>
					<View style={{flex: 5}}>
						<Button style={styles.orderButton} text={'ORDER NOW'} textStyle={GCFont.buttonFont} onPress={this.orderNowPress} />
					</View>
				</Image>
				<View style={{flex: 1, justifyContent: 'center'}}>
					<Text style={GCFont.commonText}>My GreenCorner</Text>
				</View>
				<View style={styles.separator} />
				<View style={styles.centerBox}>
					<Text style={styles.labelText}>Log in or create a greencorner account</Text>
					<Button style={styles.signupButton} text={buttonText} textStyle={GCFont.buttonFont} onPress={this.letGoPress} />
				</View>
				<View style={styles.footer}>
					<TouchableHighlight style={styles.footerButton} underlayColor={'gray'} onPress={this.orderNowPress}>
						<View>
							<Text style={styles.footerText}>Order Now</Text>
							<Text style={styles.footerText2}>FIND A GREENCORNER</Text>
						</View>
					</TouchableHighlight>
				</View>
			</View>
		);
	},

	orderNowPress: function() {
		this.props.navigator.push({name: 'menu'});
	},

	letGoPress: function() {
	}
});

var buttonText = "LET'S GO";

var styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	backgroundImage: {
		flex: 5,
		width: null,
		height: null,
		justifyContent: 'center',
		alignItems: 'center'
	},
	bannerText: {
		color: '#f5fffa',
		alignSelf: 'center',
		marginTop: 25,
		fontSize: 20
	},
	headerText: {
		fontSize: 30,
		color: '#f5fffa',
		alignSelf: 'center',
		fontWeight: '300',
		letterSpacing: 3
	},
	separator: {
       height: 1,
       backgroundColor: '#dddddd',
       marginLeft: 20,
       marginRight: 20
    },
    labelText: {
   		color: 'grey',
   		fontSize: 12,
   		marginBottom: 8
	},
	orderButton: {
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
		paddingHorizontal: 15,
		paddingVertical: 10,
		marginTop: 10,
		backgroundColor: '#fffafa'
	},
	signupButton: {
		backgroundColor: 'white',
		borderRadius: 5,
		paddingHorizontal: 130,
		paddingVertical: 15,
		marginTop: 10,
		borderWidth: 1,
		borderColor: 'grey'
	},
	centerBox: {
		flex: 2.5, 
		justifyContent: 'center', 
		alignItems: 'center'
	},
	footer: {
		flex: 1.5,
		backgroundColor: '#00fa9a'
	},
	footerButton: {
		flex: 1,
		justifyContent: 'center'
	},
	footerText: {
		color:'white',
		marginLeft: 30,
		fontSize: 15,
		lineHeight: 30
	},
	footerText2: {
		color:'white',
		marginLeft: 30,
		fontSize: 10,
		lineHeight: 30
	},
	testText: {
		fontSize: 20,
		color: '#778899',
		alignSelf: 'center',
		fontFamily: 'Verdana',
		letterSpacing: 20
	}
});