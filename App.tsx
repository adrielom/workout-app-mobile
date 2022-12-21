import { NativeBaseProvider } from 'native-base';
import React from 'react';
import Routes from './src/routes';
import 'react-native-get-random-values';
import { HomeCardListProvider } from './src/contexts/HomeCardsListContext';

export default function App() {
	// return <Routes />;
	return (
		<NativeBaseProvider>
			<HomeCardListProvider>
				<Routes />
			</HomeCardListProvider>
		</NativeBaseProvider>
	);
}
