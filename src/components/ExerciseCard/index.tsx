import React from 'react';
import { Box, Column, IBoxProps, Row, Text } from 'native-base';
import { ImageBackground } from 'react-native';
import { ExerciseSet } from '../../interfaces/ExerciseSet';
import { Barbell, HourglassSimple, Repeat } from 'phosphor-react-native';
import { THEMES } from '../../utils/Themes';

interface Props extends IBoxProps, ExerciseSet {
	imageSource: string;
}

const ExerciseCard: React.FC<Props> = ({
	imageSource,
	title,
	badges,
	sets,
	numberOfExercises,
	time,
	reps,
}: Props) => {
	return (
		<Box w={'full'} h={10} backgroundColor={'yellow'}>
			<ImageBackground borderRadius={2} source={{ uri: imageSource }}>
				<Row>
					<Column>
						<Text color={THEMES.colors.white} fontSize='3xl'>
							{title}
						</Text>
					</Column>
					<Column>
						<Box>
							<Barbell color={THEMES.colors.white} size={32} />
							<Text color={THEMES.colors.white}>
								{numberOfExercises} Exercicios
							</Text>
						</Box>
						<Box>
							<Repeat color={THEMES.colors.white} size={32} />
							<Text color={THEMES.colors.white}>
								{sets} x {reps} reps
							</Text>
						</Box>
						<Box>
							<HourglassSimple color={THEMES.colors.white} size={32} />
							<Text color={THEMES.colors.white}> {time} </Text>
						</Box>
					</Column>
				</Row>
			</ImageBackground>
		</Box>
	);
};

export default ExerciseCard;
