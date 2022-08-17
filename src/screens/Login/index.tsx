import { Inter_100Thin, useFonts } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import {
	Button,
	Center,
	Divider,
	Flex,
	HStack,
	Text,
	View,
	VStack,
} from 'native-base';
import React, { useEffect } from 'react';
import { ImageBackground } from 'react-native';
import InputComponent from '../../components/InputComponent';
import LogoText from '../../components/LogoText';
import { THEMES } from '../../utils/Themes';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function LoginScreen() {
	let [fontsLoaded] = useFonts({
		Inter_100Thin,
	});

	useEffect(() => {
		async function prepare() {
			await SplashScreen.preventAutoHideAsync();
		}

		prepare();
	}, []);

	if (!fontsLoaded) {
		return null;
	} else {
		return (
			<Center>
				<StatusBar translucent style='light' />
				<ImageBackground
					style={{
						height: '100%',
						width: '100%',
					}}
					source={require('../../assets/bg-login-screen.jpg')}>
					<VStack>
						<Center height={'full'}>
							<Center height={'45%'}>
								<LogoText />
							</Center>
							<Center flex={1} paddingY={'10'}>
								<Text
									width={'full'}
									backgroundColor={'red.900'}
									fontFamily={'Inter_100Thin'}
									color={'white'}
									maxWidth={'80'}
									fontSize={'4xl'}>
									Your own online personal trainner
								</Text>
								<VStack py={'10'} space='2.5'>
									<InputComponent placeholder='Email' />
									<InputComponent placeholder='Password' type='password' />
									<Button
										backgroundColor={'black'}
										fontFamily={'Inter_100Thin'}
										color={'red'}
										rounded={'50'}
										_text={{
											fontWeight: 'bold',
											fontSize: 20,
										}}>
										Log in
									</Button>
									<View position={'relative'}>
										<Divider
											thickness={1}
											backgroundColor={THEMES.colors.grey}
											opacity={'0.35'}
											my='2'
										/>
									</View>
									<Button
										fontWeight={'bold'}
										fontFamily={'Inter_100Thin'}
										backgroundColor={THEMES.colors.red}
										rounded={'50'}
										_text={{
											fontWeight: 'bold',
											fontSize: 20,
										}}>
										<HStack>
											<Flex direction='row'>
												<FontAwesome name='google' size={20} color={'white'} />
												<Divider
													opacity={'0.5'}
													mx={10}
													orientation='vertical'
												/>
											</Flex>
											<Text color={'white'} fontWeight={'bold'} fontSize='md'>
												Login com o Google
											</Text>
										</HStack>
									</Button>
								</VStack>
							</Center>
						</Center>
					</VStack>
				</ImageBackground>
			</Center>
		);
	}
}
