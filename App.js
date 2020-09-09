import React, {useState} from 'react';
import {StyleSheet, Text, ScrollView, View, Button} from 'react-native';
import codePush from "react-native-code-push";

const App = () => {
	const [value, setValue] = useState(1)

	return (
		<View style={styles.wrap}>
			<Text style={styles.text}>
				Value :
			</Text>
			<Text style={styles.hint}>no github</Text>

			<Text style={styles.value}>
				{value}
			</Text>


			<View style={{flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginBottom: 25}}>
				<Button  title="decrease" onPress={() => setValue(value - 1)} color="#f194ff"/>
				<Button title="increase" onPress={() => setValue(value + 1)}/>
			</View>
				<Button
					title="check For Update"
					color="#48A868"
					onPress={() => codePush.checkForUpdate().then(res => alert(JSON.stringify(res)))}
				/>
			<View style={styles.hr}/>
				<Button
					title="Restart app"
					color="#48A868"
					onPress={() => codePush.restartApp()}
				/>
			<View style={styles.hr}/>
				{/*<Button*/}
				{/*	title="clear Updates"*/}
				{/*	color="#E8594C"*/}
				{/*	onPress={() => codePush.clearUpdates()}*/}
				{/*/>*/}
		</View>
	);
};

const styles = StyleSheet.create({
	hr: {
		height: 10
	},
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
	hint: {
		marginTop: -10,
		fontSize: 11,
		color: '#fbfbfb'
	},
	value: {
		fontSize: 36,
		color: '#ffffff'
	},
});

export default App;
