import { NativeBaseProvider } from 'native-base';
import React from 'react';
import Routes from './src/routes';
import 'react-native-get-random-values';

export default function App() {
	// return <Routes />;
	return (
		<NativeBaseProvider>
			<Routes />
		</NativeBaseProvider>
	);
}
