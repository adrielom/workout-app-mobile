import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { millisecondsToMinutes } from 'date-fns';
import { LinearGradient } from 'expo-linear-gradient';
import {
	Box,
	Center,
	Column,
	Heading,
	Row,
	StatusBar,
	Text,
} from 'native-base';
import {
	ArrowLeft,
	Barbell,
	Fire,
	HourglassSimple,
	PencilSimple,
	Repeat,
} from 'phosphor-react-native';
import React, { ReactFragment } from 'react';
import {
	Dimensions,
	ImageBackground,
	Pressable,
	SafeAreaView,
} from 'react-native';
import BadgesList from '../../components/BadgesList';
import { ExerciseSet } from '../../interfaces/ExerciseSet';
import { StackRoutesProps } from '../../routes/stack.routes';
import { PlaceholderBadgesList } from '../../utils/PlaceholderInfo';
import { THEMES } from '../../utils/Themes';
import { STATUSBAR_HEIGHT } from '../Home';

const HEIGHT = Dimensions.get('window').height / 2.6 + STATUSBAR_HEIGHT;

type ExerciseScreenProps = StackNavigationProp<StackRoutesProps, 'Exercise'>;
type ExerciseScreen = ExerciseSet & {
	imageSource: string;
};

const ExerciseScreen: React.FC = () => {
	const navigation = useNavigation<ExerciseScreenProps>();
	const { params } = useRoute();

	const exerciseInfo = params as ExerciseScreen;

	return (
		<>
			<StatusBar translucent barStyle={'light-content'} />
			<SafeAreaView style={{}}>
				<Column>
					<Box position={'relative'} height={'35%'}>
						<Box
							top={0}
							position={'absolute'}
							height={'100%'}
							width={'100%'}
							backgroundColor={'red'}
							zIndex={2}
						/>
						<ImageBackground
							style={{
								paddingTop: STATUSBAR_HEIGHT,
								height: HEIGHT,
								width: '100%',
								backgroundColor: 'orange',
								position: 'relative',
								zIndex: 1,
							}}
							resizeMode={'cover'}
							source={{
								uri:
									exerciseInfo.imageSource || 'https://github.com/adrielom.png',
							}}>
							<LinearGradient
								style={{
									width: '100%',
									height: HEIGHT,
									position: 'absolute',
									zIndex: 2,
								}}
								start={{ x: 0, y: 0.3 }}
								end={{ x: 0, y: 0.8 }}
								colors={['transparent', 'rgba(0,0,0,0.5)']}
							/>
							<Column
								paddingX={4}
								zIndex={3}
								height={'100%'}
								justifyContent={'space-around'}>
								<Row justifyContent={'space-between'} alignItems={'center'}>
									<Pressable
										onPress={() => {
											navigation.goBack();
										}}>
										<ArrowLeft size={32} color='white' />
									</Pressable>
									<Pressable onPress={() => console.log('second')}>
										<PencilSimple size={28} color='white' />
									</Pressable>
								</Row>
								<Column height={'35%'}>
									<Heading
										fontSize={THEMES.size.exerciseScreenTitle}
										color={THEMES.colors.white}>
										{exerciseInfo?.title || 'Push It HARD!'}
									</Heading>
									<Row>
										<Row alignItems={'center'} pr={2}>
											<Barbell
												weight='thin'
												color={THEMES.colors.white}
												style={{
													marginRight: 5,
												}}
												size={THEMES.size.exerciseHeaderIconSize}
											/>
											<Text color={THEMES.colors.white} fontStyle={'italic'}>
												{`${exerciseInfo?.numberOfExercises || 7} Exercises`}
											</Text>
										</Row>
										<Row alignItems={'center'} pr={2}>
											<Fire
												weight='thin'
												color={THEMES.colors.white}
												style={{
													marginRight: 5,
												}}
												size={THEMES.size.exerciseHeaderIconSize}
											/>
											<Text
												fontStyle={'italic'}
												color={THEMES.colors.white}>{`~${
												exerciseInfo?.calories || 1234
											}cal`}</Text>
										</Row>
										<Row alignItems={'center'} pr={2}>
											<Repeat
												weight='thin'
												color={THEMES.colors.white}
												style={{
													marginRight: 5,
												}}
												size={THEMES.size.exerciseHeaderIconSize}
											/>
											<Text color={THEMES.colors.white}>{`${
												exerciseInfo?.reps || 3
											}x${exerciseInfo?.sets || 12} reps`}</Text>
										</Row>
										<Row alignItems={'center'} pr={2}>
											<HourglassSimple
												weight='thin'
												color={THEMES.colors.white}
												style={{
													marginRight: 5,
												}}
												size={THEMES.size.exerciseHeaderIconSize}
											/>
											<Text color={THEMES.colors.white}>
												{millisecondsToMinutes(exerciseInfo?.time).toString() ||
													'34:56'}
											</Text>
										</Row>
									</Row>
									<Row>
										<BadgesList
											data={exerciseInfo?.badges || PlaceholderBadgesList}
										/>
									</Row>
								</Column>
							</Column>
						</ImageBackground>
					</Box>
					<Box height={'65%'}>
						<Center>
							<Text color={'white'}>hjfsdfk</Text>
						</Center>
					</Box>
				</Column>
			</SafeAreaView>
		</>
	);
};

export default ExerciseScreen;
