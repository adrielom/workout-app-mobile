import React from 'react';

import {
	Badge,
	Box,
	Center,
	Column,
	StatusBar,
	Text,
	FlatList,
} from 'native-base';
import { SafeAreaView, NativeModules, Platform } from 'react-native';

import Searchbar from '../../components/Searchbar';
import { THEMES } from '../../utils/Themes';
import ExerciseCard from '../../components/ExerciseCard';

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
						renderItem={({ item }): any => {
							return (
								<Badge
									px={THEMES.spacing.xm}
									ml={THEMES.spacing.xm}
									maxHeight={'100'}
									variant={'solid'}
									backgroundColor={item.bgCol}
									borderRadius={'xl'}>
									{item.title}
								</Badge>
							);
						}}
					/>
					<Center>
						<ExerciseCard
							imageSource='https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
							badges={[]}
							numberOfExercises={2}
							reps={3}
							sets={2}
							time={4}
							title={'heeey'}
						/>
					</Center>
				</Column>
			</SafeAreaView>
		</Box>
	);
};

export default HomeScreen;
