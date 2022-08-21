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

const { StatusBarManager } = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

const HomeScreen: React.FC = () => {
	const FILTERS_LIST = [
		{
			title: 'Filter 1',
			bgCol: 'black',
		},
		{
			title: 'Filter 2',
			bgCol: 'grey',
			color: THEMES.colors.lightGrey,
		},
	];
	return (
		<Box>
			<StatusBar translucent barStyle={'dark-content'} />
			<SafeAreaView
				style={{
					marginTop: STATUSBAR_HEIGHT,
				}}>
				<Column padding={'8'}>
					<Searchbar />
					<FlatList
						horizontal={true}
						py={THEMES.spacing.xm}
						backgroundColor={'green'}
						data={FILTERS_LIST}
						width={'full'}
						left={0}
						contentContainerStyle={{
							height: '100%',
							width: '100%',
						}}
						renderItem={({ item, index }): any => {
							return (
								<Badge
									px={THEMES.spacing.xm}
									ml={index !== 0 ? THEMES.spacing.xm : 0}
									maxHeight={'100'}
									variant={'solid'}
									backgroundColor={item.bgCol}
									borderRadius={'xl'}>
									{item.title}
								</Badge>
							);
						}}
					/>
					<CardsList title='My Exercises' exercisesList={PlaceholderInfo} />
				</Column>
			</SafeAreaView>
		</Box>
	);
};

export default HomeScreen;
