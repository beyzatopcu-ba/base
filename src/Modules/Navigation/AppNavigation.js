import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../Home';
import AddEditScreen from '../Home/Screens/AddEditScreen';
import { Text, TouchableOpacity } from 'react-native';
import AsyncScreen from '../Home/AsyncStorage/AsyncScreen';
import { useNavigation } from '@react-navigation/core';


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
                            <TouchableOpacity onPress={() => navigation.navigate("async-screen")}>
                                <Text>Async</Text>
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
                name="async-screen"
                component={AsyncScreen}
                options={{
                    title: 'ASYNC',
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
