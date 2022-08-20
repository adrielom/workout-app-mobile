import {
	Inter_100Thin,
	Inter_400Regular,
	useFonts,
} from '@expo-google-fonts/inter';
import { Icon, IInputProps, Input } from 'native-base';
import { MagnifyingGlass } from 'phosphor-react-native';
import React from 'react';
import { THEMES } from '../../utils/Themes';

interface Props extends IInputProps {}

const Searchbar: React.FC<Props> = () => {
	let [fontsLoaded] = useFonts({
		Inter_100Thin,
		Inter_400Regular,
	});

	if (!fontsLoaded) return null;

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
		/>
	);
};

export default Searchbar;
