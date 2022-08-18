import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import StackRoutes from './stack.routes';
import TabsRoutes from './tabs.routes';

// import { Container } from './styles';

const Routes: React.FC = () => {
	return (
		<NavigationContainer>
			<StackRoutes />
		</NavigationContainer>
	);
};

export default Routes;
