import * as React from 'react-native';
import { Text, View, SafeAreaView, StyleSheet, Image, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { useCallback, useState } from 'react';
import { useFonts } from 'expo-font'
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import fratureData from '../assets/data/fractureData';
import animalbiteData from '../assets/data/animalbiteData';
import AppLoading from 'expo-app-loading';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
Feather.loadFont();

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

    const renderFractureItem = ({ item }) => {
        return (
            <View style={[styles.fractureItemWrapper, {
                backgroundColor: item.selected ? "#EE4040" : "#DAD4D4",
                borderWidth: item.selected ? 2 : 0,
            }]}>
                <Image source={item.image} style={styles.fractureItemImage} />
                <Text style={[styles.fractureItemTitle, {
                    color: item.selected ? "white" : "black"
                }]}>{item.title}</Text>
            </View>
        )
    }

    const renderAnimalbiteItem = ({ item }) => {
        return (
            <View style={[styles.animalbiteItemWrapper, {
                backgroundColor: item.selected ? "#EE4040" : "#DAD4D4",
                borderWidth: item.selected ? 2 : 0,
            }]}>
                <Image source={item.image} style={styles.animalbiteItemImage}/>
                <Text style={[styles.animalbiteItemTitle, {
                    color: item.selected ? "white" : "black"
                }]}>{item.title}</Text>
            </View>
        )
    }

    return (
        <View style={styles.container} onLayout={onLayoutRootView}>
            <SafeAreaView>
                <View style={styles.headerWrapper}>
                    <Image
                        source={require('../assets/images/Sam.jpg')}
                        style={styles.profileImage}
                    />
                    <Text style={styles.titleWrapper}>Med Guide</Text>
                    <Feather name='menu' size={24} />
                </View>
            </SafeAreaView>

            <View style={styles.searchContainer}>
                <View style={styles.searchWrapper}>
                    <TextInput 
                        style={styles.searchInput}
                        value=''
                        onChange={() => {}}
                        placeholder='What are you looking for?'
                    />
                </View>

                <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
                    <Image 
                        source={require("../assets/icons/search.png")}
                        resizeMode='contain'
                        style={styles.searchBtnImage}/>
                </TouchableOpacity>
            </View>

            <View style={styles.fractureHeader}>
                <Text style={styles.fractureText}>Fractures</Text>
                <View style={styles.fractureListWrapper}>
                    <FlatList
                        data={fratureData}
                        renderItem={renderFractureItem}
                        keyExtractor={item => item.id}
                        horizontal={true}
                    />
                </View>
            </View>

            <View style={styles.animalbiteHeader}>
                <Text style={styles.animalbiteText}>Animal Bites</Text>
                <View style={styles.animalbiteListWrapper}>
                    <FlatList
                        data={animalbiteData}
                        renderItem={renderAnimalbiteItem}
                        keyExtractor={item => item.id}
                        horizontal={true}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 50,
        alignItems: "center"
    },
    profileImage: {
        width: 45,
        height: 45,
        borderRadius: 40
    },
    titleWrapper: {
        fontFamily: "Montserrat-Bold",
        fontSize: 29
    },
    fractureHeader: {
        marginTop: 30,
        paddingHorizontal: 20
    },
    fractureText: {
        fontFamily: "Montserrat-Bold",
        fontSize: 18,
    },
    fractureListWrapper: {
        paddingTop: 15,
        paddingBottom: 20,
    },
    fractureItemWrapper: {
        backgroundColor: "#BFB5B5",
        marginRight: 20,
        borderRadius: 20,
    },
    fractureItemImage: {
        width: 71,
        height: 68,
        marginTop: 25,
        alignSelf: "center",
        marginHorizontal: 20
    },
    fractureItemTitle: {
        textAlign: "center",
        fontFamily: "CrimsonText-Bold",
        fontSize: 14,
        marginTop: 10,
        marginBottom: 20
    },
    fractureSelectWrapper: {
        alignSelf: "center",
        justifyContent: "center",
        marginTop: 20,
        width: 26,
        height: 26,
        borderRadius: 26,
        marginBottom: 20
    },
    fractureSelectIcon: {
        alignSelf: "center"
    },
    animalbiteHeader: {
        paddingHorizontal: 20
    },
    animalbiteText: {
        fontFamily: "Montserrat-Bold",
        fontSize: 18
    },
    animalbiteListWrapper: {
        paddingTop: 15,
        paddingBottom: 20,
    },
    animalbiteItemWrapper: {
        backgroundColor: "#BFB5B5",
        marginRight: 20,
        borderRadius: 20
    },
    animalbiteItemImage: {
        width: 71,
        height: 68,
        marginTop: 25,
        alignSelf: "center",
        marginHorizontal: 20
    },
    animalbiteItemTitle: {
        textAlign: "center",
        fontFamily: "CrimsonText-Bold",
        fontSize: 14,
        marginTop: 10,
        marginBottom: 20
    },
    searchContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginTop: 30,
        height: 40,
        paddingHorizontal: 20
    },
    searchWrapper: {
        flex: 1,
        backgroundColor: "white",
        marginRight: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 3,
        height: "100%",
    },
    searchInput: {
        width: "100%",
        height: "100%",
        paddingHorizontal: 8,
    },
    searchBtn: {
        width: 45,
        height: "100%",
        backgroundColor: "#13C01E",
        borderRadius: 3,
        justifyContent: "center",
        alignItems: "center",
    },
    searchBtnImage: {
        width: "50%",
        height: "50%",
        tintColor: "white",
    }
})