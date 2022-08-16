import { View, Center, Image } from 'native-base'
import { } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'


export default function LoginScreen() {
    return (
        <Center>
            <StatusBar translucent style='light' />
            <Image
                alt='bg'
                source={require('../../assets/bg-login-screen.jpg')}
                size={'full'}
                resizeMode={'cover'}
            />
        </Center>
    )
}
