import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../Home';
import AddEditScreen from '../Home/Screens/AddEditScreen';
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import DeviceInfoScreen from '../Home/DeviceInfo/DeviceInfoScreen';


const AppStack = createStackNavigator();

const AppNavigation = () => {

    return (
        <AppStack.Navigator
        >
            <AppStack.Screen
                name="home-screen"
                component={HomeScreen}
                options={{
                    title: 'Anasayfa',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#30D086'
                    },
                    headerTintColor: 'white',
                    headerRight: () => {
                        const navigation = useNavigation();
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate("device-info-screen")}>
                                <Text>Device Info</Text>
                            </TouchableOpacity>
                        )
                    }
                }}
            />
            <AppStack.Screen
                name="add-edit-screen"
                component={AddEditScreen}
                options={{
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#30D086'
                    },
                    headerTintColor: 'white',
                }}
            />
            <AppStack.Screen
                name="device-info-screen"
                component={DeviceInfoScreen}
                options={{
                    title: 'DEVICE INFO',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#30D086'
                    },
                    headerTintColor: 'white',
                }}
            />
        </AppStack.Navigator>
    );
};

export default AppNavigation;
