import {
	Inter_100Thin,
	Inter_400Regular,
	useFonts,
} from '@expo-google-fonts/inter';
import { Icon, IInputProps, Input } from 'native-base';
import { MagnifyingGlass } from 'phosphor-react-native';
import React, { useEffect } from 'react';
import { useHomeCardList } from '../../contexts/HomeCardsListContext';
import { THEMES } from '../../utils/Themes';

interface Props extends IInputProps {}

const Searchbar: React.FC<Props> = () => {
	let [fontsLoaded] = useFonts({
		Inter_100Thin,
		Inter_400Regular,
	});

	if (!fontsLoaded) return null;

	const homeCardListContext = useHomeCardList();

	// useEffect(() => {
	// 	console.log(homeCardListContext);
	// }, []);

	return (
		<Input
			InputLeftElement={
				<Icon
					as={<MagnifyingGlass color={THEMES.colors.darkGrey} size={32} />}
					ml={2}
				/>
			}
			fontFamily={'Inter_400Regular'}
			fontSize={THEMES.size.searchBarFontSize}
			borderRadius={'8'}
			borderWidth={'0'}
			backgroundColor={'#d9d9d945'}
			onChangeText={(input) => {
				homeCardListContext.filter(input);
			}}
		/>
	);
};

export default Searchbar;
