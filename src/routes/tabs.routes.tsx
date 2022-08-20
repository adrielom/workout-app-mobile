import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Center, Text, View } from 'native-base';
import { House, PlusCircle, User } from 'phosphor-react-native';
import HomeScreen from '../screens/Home';
import { THEMES } from '../utils/Themes';

// import { Container } from './styles';
const Tabs = createBottomTabNavigator();

function Bla(params: any) {
	return <View></View>;
}

function BottomDotIndicator({ color, focused, title }: any) {
	return (
		<Center position={'relative'} marginBottom={'-3px'}>
			<Text marginBottom={'2px'} color={color} fontSize={10}>
				{title}
			</Text>
			{focused && (
				<View h={'3px'} w={'3px'} backgroundColor={color} borderRadius={10} />
			)}
		</Center>
	);
}

const TabsRoutes: React.FC = () => {
	return (
		<Tabs.Navigator
			initialRouteName='Home'
			screenOptions={{
				tabBarActiveTintColor: 'white',
				tabBarLabelPosition: 'below-icon',
				headerShown: false,
				headerShadowVisible: true,
				tabBarHideOnKeyboard: true,
				tabBarStyle: {
					height: 60,
					paddingTop: 5,
					paddingBottom: 5,
					backgroundColor: 'white',
				},
			}}>
			<Tabs.Screen
				name='Add'
				component={Bla}
				options={{
					tabBarIcon({ color, size, focused }) {
						return (
							<PlusCircle
								size={32}
								color={color}
								weight={focused ? 'fill' : 'regular'}
							/>
						);
					},
					tabBarActiveTintColor: THEMES.colors.black,
					tabBarLabel({ color, focused }) {
						return (
							<BottomDotIndicator title='Add' color={color} focused={focused} />
						);
					},
				}}
			/>
			<Tabs.Screen
				name='Home'
				component={HomeScreen}
				options={{
					tabBarIcon({ color, size, focused }) {
						return (
							<House
								size={THEMES.size.bottomTabIconSize}
								color={color}
								weight={focused ? 'fill' : 'regular'}
							/>
						);
					},
					tabBarActiveTintColor: THEMES.colors.black,
					tabBarLabel({ color, focused }) {
						return (
							<BottomDotIndicator
								title='Home'
								color={color}
								focused={focused}
							/>
						);
					},
				}}
			/>
			<Tabs.Screen
				name='Me'
				component={Bla}
				options={{
					tabBarIcon({ color, size, focused }) {
						return (
							<User
								size={
									focused
										? THEMES.size.bottomTabIconSize + 5
										: THEMES.size.bottomTabIconSize
								}
								color={color}
								weight={focused ? 'fill' : 'regular'}
							/>
						);
					},
					tabBarActiveTintColor: THEMES.colors.black,
					tabBarLabel({ color, focused }) {
						return (
							<BottomDotIndicator title='Me' color={color} focused={focused} />
						);
					},
				}}
			/>
		</Tabs.Navigator>
	);
};

export default TabsRoutes;
