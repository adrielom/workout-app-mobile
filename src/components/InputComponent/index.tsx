import React from 'react';
import { Input, IInputProps } from 'native-base';
import { THEMES } from '../../utils/Themes';
// import { Container } from './styles';

const InputComponent = ({ ...rest }: IInputProps) => {
	return (
		<Input
			outlineStyle={'none'}
			outlineColor={'transparent'}
			backgroundColor={THEMES.colors.grey}
			placeholderTextColor={'white'}
			fontSize={'xl'}
			color={'white'}
			focusOutlineColor={'white'}
			borderRadius={12}
			fontWeight={'normal'}
			fontFamily={'Inter_100Thin'}
			opacity={'0.35'}
			width={'80'}
			{...rest}
		/>
	);
};

export default InputComponent;
