import { Badge, Box, FlatList, IBoxProps } from 'native-base';
import React from 'react';
import { View } from 'react-native';
import { IBadge } from '../../interfaces/Badge';
import { THEMES } from '../../utils/Themes';
import Searchbar from '../Searchbar';

// import { Container } from './styles';

interface BadgesListProps extends IBoxProps {
	data: Array<IBadge>;
}

const BadgesList: React.FC<BadgesListProps> = ({ data }) => {
	return (
		<Box>
			<FlatList
				horizontal={true}
				py={THEMES.spacing.xm}
				data={data}
				width={'full'}
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
							style={{
								backgroundColor: item.color,
							}}
							borderRadius={'xl'}>
							{item.title}
						</Badge>
					);
				}}
			/>
		</Box>
	);
};

export default BadgesList;
