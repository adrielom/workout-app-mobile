import React from 'react';

import {
	Badge,
	Box,
	Center,
	Column,
	StatusBar,
	Text,
	FlatList,
	ScrollView,
} from 'native-base';
import { SafeAreaView, NativeModules, Platform } from 'react-native';

import Searchbar from '../../components/Searchbar';
import { THEMES } from '../../utils/Themes';
import ExerciseCard, {
	CARD_HEIGHT,
	ExerciseCardProps,
} from '../../components/ExerciseCard';
import CardsList from '../../components/CardsList';
import { PlaceholderInfo } from '../../utils/PlaceholderInfo';
import BadgesList from '../../components/BadgesList';
import { IBadge } from '../../interfaces/Badge';

const { StatusBarManager } = NativeModules;
export const STATUSBAR_HEIGHT =
	Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

const HomeScreen: React.FC = () => {
	const FILTERS_LIST = [
		{
			title: 'Filter 1',
			color: 'black',
		},
		{
			title: 'Filter 2',
			color: THEMES.colors.lightGrey,
		},
	] as Array<IBadge>;

	return (
		<Box>
			<StatusBar translucent barStyle={'dark-content'} />
			<SafeAreaView
				style={{
					marginTop: STATUSBAR_HEIGHT,
				}}>
				<Column padding={'8'}>
					<Searchbar />
					{/* badge list */}
					<BadgesList data={FILTERS_LIST} />
					<CardsList title='My Exercises' exercisesList={PlaceholderInfo} />
				</Column>
			</SafeAreaView>
		</Box>
	);
};

export default HomeScreen;
