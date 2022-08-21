import React from 'react';
import {
	Badge,
	Box,
	Column,
	IBoxProps,
	Row,
	ScrollView,
	Text,
} from 'native-base';
import { Dimensions, ImageBackground } from 'react-native';
import { ExerciseSet } from '../../interfaces/ExerciseSet';
import { Barbell, HourglassSimple, Repeat } from 'phosphor-react-native';
import { THEMES } from '../../utils/Themes';
import {
	useFonts,
	Inter_700Bold,
	Inter_500Medium,
} from '@expo-google-fonts/inter';
import { LinearGradient } from 'expo-linear-gradient';
import { v4 as uuidv4 } from 'uuid';
import { millisecondsToMinutes } from 'date-fns';

export interface ExerciseCardProps extends IBoxProps, ExerciseSet {
	imageSource: string;
}
const CARD_WIDTH = Dimensions.get('window').width;
export const CARD_HEIGHT = CARD_WIDTH * 0.55;

const ExerciseCard: React.FC<ExerciseCardProps> = ({
	imageSource,
	title,
	badges,
	sets,
	numberOfExercises,
	time,
	reps,
	...rest
}: ExerciseCardProps) => {
	const [fontsLoaded] = useFonts({
		Inter_500Medium,
		Inter_700Bold,
	});

	function renderBadges() {
		let bgs = [];

		if (badges.length <= 3) bgs = badges;
		else bgs = badges.slice(0, 3);

		return bgs.map((item) => (
			<Badge
				variant={'solid'}
				zIndex={2}
				key={uuidv4()}
				style={{
					backgroundColor: item.color,
					alignItems: 'center',
					justifyContent: 'center',
					paddingTop: 0,
				}}
				borderRadius={'xl'}>
				{item.title}
			</Badge>
		));
	}

	if (!fontsLoaded) return null;

	return (
		<Box w={'full'} position={'relative'} {...rest}>
			<LinearGradient
				style={{
					width: '100%',
					height: CARD_HEIGHT,
					position: 'absolute',
					zIndex: 2,
					borderRadius: 8,
				}}
				start={{ x: 0, y: 0.3 }}
				end={{ x: 0, y: 0.8 }}
				colors={['transparent', 'rgba(0,0,0,0.5)']}
			/>
			<ImageBackground
				style={{
					height: CARD_HEIGHT,
					justifyContent: 'flex-end',
				}}
				borderRadius={8}
				source={{ uri: imageSource }}>
				<Row height={'30%'} px={'2'} mb={'2'} zIndex={2}>
					<Column w={'70%'}>
						<Text
							color={THEMES.colors.white}
							fontSize='3xl'
							fontWeight={'bold'}
							fontFamily={'Inter_700Bold'}>
							{title}
						</Text>
						<ScrollView horizontal={true}>{renderBadges()}</ScrollView>
					</Column>
					<Column w={'30%'} justifyContent={'flex-end'}>
						<Box flexDir={'row'} alignItems={'center'}>
							<Barbell
								color={'white'}
								size={THEMES.size.exerciseCardIconSize}
								style={{
									marginRight: THEMES.spacing.lg,
								}}
							/>
							<Text
								color={THEMES.colors.white}
								fontFamily={'Inter_500Medium'}
								fontStyle={'italic'}>
								{numberOfExercises} Exercicios
							</Text>
						</Box>
						<Box flexDir={'row'} alignItems={'center'}>
							<Repeat
								color={'white'}
								size={THEMES.size.exerciseCardIconSize}
								style={{
									marginRight: THEMES.spacing.lg,
								}}
							/>
							<Text
								color={THEMES.colors.white}
								fontFamily={'Inter_500Medium'}
								fontStyle={'italic'}>
								{sets} x {reps} reps
							</Text>
						</Box>
						<Box flexDir={'row'} alignItems={'center'}>
							<HourglassSimple
								color={'white'}
								size={THEMES.size.exerciseCardIconSize}
								style={{
									marginRight: THEMES.spacing.lg,
								}}
							/>
							<Text
								color={THEMES.colors.white}
								fontFamily={'Inter_500Medium'}
								fontStyle={'italic'}>
								{millisecondsToMinutes(time).toString()}
							</Text>
						</Box>
					</Column>
				</Row>
			</ImageBackground>
		</Box>
	);
};

export default ExerciseCard;
