import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const App = () => {
	return (
		<View style={styles.wrap}>
			<Text style={styles.text}>
				before code push
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	wrap: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
		backgroundColor: '#546E7A'
	},
	text: {
		fontSize: 42,
		color: '#fafafa'
	},
});

export default App;
