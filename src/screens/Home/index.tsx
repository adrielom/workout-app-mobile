import React, { useContext, useState } from 'react';

import { Box, Column, StatusBar } from 'native-base';
import { NativeModules, Platform, SafeAreaView } from 'react-native';

import BadgesList from '../../components/BadgesList';
import CardsList from '../../components/CardsList';
import Searchbar from '../../components/Searchbar';
import { IBadge } from '../../interfaces/Badge';
import { THEMES } from '../../utils/Themes';
import {
	HomeCardListContext,
	useHomeCardList,
} from '../../contexts/HomeCardsListContext';

const { StatusBarManager } = NativeModules;
export const STATUSBAR_HEIGHT =
	Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

const HomeScreen: React.FC = () => {
	const homeCardListContext = useContext(HomeCardListContext);

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
					<CardsList
						title='My Exercises'
						exercisesList={homeCardListContext.get()}
					/>
				</Column>
			</SafeAreaView>
		</Box>
	);
};

export default HomeScreen;
