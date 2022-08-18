import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View } from 'react-native';
import HomeScreen from '../screens/Home';

// import { Container } from './styles';
const Tabs = createBottomTabNavigator();

const TabsRoutes: React.FC = () => {
	return (
		<Tabs.Navigator
			screenOptions={{
				tabBarActiveTintColor: 'white',
				tabBarLabelPosition: 'below-icon',
				headerShown: false,
				tabBarStyle: {
					height: 55,
					paddingBottom: 5,
					backgroundColor: 'white',
				},
				// tabBarIcon: ({ size, color }) => (
				// 	<Foundation name='home' size={24} color={themes.COLORS.WHITE} />
				// ),
			}}>
			<Tabs.Screen name='Home' component={HomeScreen} />
		</Tabs.Navigator>
	);
};

export default TabsRoutes;
