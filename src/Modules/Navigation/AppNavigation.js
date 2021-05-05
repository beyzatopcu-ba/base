import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../Home';
import AddEditScreen from '../Home/Screens/AddEditScreen';


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
        </AppStack.Navigator>
    );
};

export default AppNavigation;
