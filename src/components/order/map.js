import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import MapView from 'react-native-maps'

module.exports = React.createClass({
	render: function() {
	  return (
	    <MapView style={styles.container}
		    initialRegion={{
		      latitude: 47.6103750,
		      longitude: -122.3413610,
		      latitudeDelta: 0.0922,
		      longitudeDelta: 0.0421,
		    }}
		/>
	  );
	}
});

var styles = StyleSheet.create({
	container:{
		flex: 1
	}
});