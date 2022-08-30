import { Inter_500Medium, useFonts } from '@expo-google-fonts/inter';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Box, FlatList, IBoxProps, Text } from 'native-base';
import React from 'react';
import { StackRoutesProps } from '../../routes/stack.routes';
import { THEMES } from '../../utils/Themes';
import ExerciseCard, { CARD_HEIGHT, ExerciseCardProps } from '../ExerciseCard';

interface Props extends IBoxProps {
	exercisesList: Array<ExerciseCardProps>;
	title: string;
}
type CardListProps = StackNavigationProp<StackRoutesProps, 'Exercise'>;

const CardsList: React.FC<Props> = ({ title, exercisesList }) => {
	const navigation = useNavigation<CardListProps>();
	const [fontsLoaded] = useFonts({
		Inter_500Medium,
	});

	if (!fontsLoaded) return null;

	return (
		<Box>
			<Text
				fontFamily={'Inter_500Medium'}
				fontSize={THEMES.size.cardListTitleSize}
				fontWeight={'bold'}
				mb={2}>
				{title}
			</Text>
			<FlatList<ExerciseCardProps>
				// scrollEnabled={true}
				data={exercisesList}
				contentContainerStyle={{
					justifyContent: 'space-around',
					paddingBottom: CARD_HEIGHT / 0.45,
				}}
				renderItem={({ index, item }) => {
					return (
						<ExerciseCard
							imageSource={item.imageSource}
							badges={item.badges}
							numberOfExercises={item.numberOfExercises}
							reps={item.reps}
							sets={item.sets}
							mb={'2'}
							key={item.imageSource + Date.now().toString()}
							time={item.time}
							title={item.title}
							onTouchStart={() => navigation.navigate('Exercise')}
						/>
					);
				}}
			/>
		</Box>
	);
};

export default CardsList;
