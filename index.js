/**
 * @format
 */
import React from 'react'
import {AppRegistry, View, Text} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import codePush from "react-native-code-push";

class CodePushWrap extends React.Component {

	constructor() {
		super();
		this.state = {
			progress: null,
			status: null
		}
	}

	setStatus = status => {
		this.setState({status})
	}
	setProgress = progress => {
		this.setState({progress})
	}
	codePushStatusDidChange(status) {
		switch(status) {
			case codePush.SyncStatus.CHECKING_FOR_UPDATE:
				console.log("Checking for updates.");
				break;
			case codePush.SyncStatus.DOWNLOADING_PACKAGE:
				this.setStatus(status)
				console.log("Downloading package.");
				break;
			case codePush.SyncStatus.INSTALLING_UPDATE:
				console.log("Installing update.");
				break;
			case codePush.SyncStatus.UP_TO_DATE:
				console.log("Up-to-date.");
				break;
			case codePush.SyncStatus.UPDATE_INSTALLED:
				this.setStatus(status)
				break;
		}
	}

	codePushDownloadDidProgress(progress) {
		this.setProgress(progress)

		console.log(progress.receivedBytes + " of " + progress.totalBytes + " received.");
	}

	render() {

		return (
			<>
				<App />


				{
					(!!this.state.status || !!this.state.progress) && (
						<View style={{bottom: 0, backgroundColor: '#fff2f2', height: 50}}>
							<Text>Status: {this.state.status}</Text>
							<Text>Downloaded: {this.state.progress}</Text>
						</View>
					)
				}

			</>
		)
	}
}


const WithCodePush = codePush({ updateDialog: true, installMode: codePush.InstallMode.IMMEDIATE })(CodePushWrap);

AppRegistry.registerComponent(appName, () => WithCodePush);
