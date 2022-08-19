import React from 'react';
import { Input, IInputProps } from 'native-base';
import { THEMES } from '../../utils/Themes';
// import { Container } from './styles';

const InputComponent = ({ ...rest }: IInputProps) => {
	return (
		<Input
			outlineStyle={'none'}
			outlineColor={THEMES.colors.white}
			backgroundColor={THEMES.colors.grey}
			placeholderTextColor={THEMES.colors.white}
			fontSize={'xl'}
			color={THEMES.colors.white}
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
