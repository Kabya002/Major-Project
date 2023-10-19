import * as React from 'react-native';
import { Text, View, SafeAreaView, StyleSheet, Image, FlatList, TouchableOpacity, TextInput } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { useFonts } from 'expo-font';
import { useCallback, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import styles from './styles/home.style';

SplashScreen.preventAutoHideAsync();

export default Home = () => {
    let [fontsLoaded] = useFonts({
        "Montserrat-Bold": require("../assets/fonts/Montserrat-Bold.ttf"),
        "Montserrat-Medium": require("../assets/fonts/Montserrat-Medium.ttf"),
        "Montserrat-Regular": require("../assets/fonts/Montserrat-Regular.ttf"),
        "Montserrat-SemiBold": require("../assets/fonts/Montserrat-SemiBold.ttf"),
        "CrimsonText-Bold": require("../assets/fonts/CrimsonText-Bold.ttf")
    })

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded])

    if (!fontsLoaded) return null;

    return (
        <View style={styles.container} onLayout={onLayoutRootView}>
            <SafeAreaView>
                <View style={styles.headerWrapper}>
                    <Image
                        source={require('../assets/images/Sam.jpg')}
                        style={styles.profileImage}
                    />
                    <TouchableOpacity style={styles.loginBtn}>
                        <Text style={styles.loginText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>

            <View style={styles.titleWrapper}>
                <Text style={styles.appTitle}>App Name</Text>
            </View>

            <View style={styles.homeButtons}>
                <TouchableOpacity style={styles.casualtyHeader}>
                    <Text style={styles.casualtyTitle}>Casualties</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.recordsHeader}>
                    <Text style={styles.recordsTitle}>Records</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.emergencyHeader}>
                    <Text style={styles.emergencyTitle}>Emergencies</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

