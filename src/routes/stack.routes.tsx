import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { ExerciseSet } from '../interfaces/ExerciseSet';
import ExerciseScreen from '../screens/ExerciseScreen';
import FeedScreen from '../screens/Feed';
import HomeScreen from '../screens/Home';
import LoginScreen from '../screens/Login';

export type StackRoutesProps = {
	Login: undefined;
	Feed: undefined;
	Exercise: ExerciseSet | undefined;
};
const Stack = createNativeStackNavigator();

const StackRoutes: React.FC = () => {
	return (
		<Stack.Navigator initialRouteName='Login'>
			<Stack.Screen
				name='Login'
				component={LoginScreen}
				options={{
					headerShown: false,
					statusBarTranslucent: true,
					statusBarColor: 'transparent',
				}}
			/>
			<Stack.Screen
				name='Feed'
				component={FeedScreen}
				options={{
					headerShown: false,
					statusBarTranslucent: true,
					statusBarColor: 'transparent',
				}}
			/>
			<Stack.Screen
				name='Exercise'
				component={ExerciseScreen}
				options={{
					headerShown: false,
					statusBarTranslucent: true,
					statusBarColor: 'transparent',
				}}
			/>
		</Stack.Navigator>
	);
};

export default StackRoutes;
