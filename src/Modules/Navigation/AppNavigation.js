import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../Home';


const AppStack = createStackNavigator();

const AppNavigation = () => {

    return (
        <AppStack.Navigator
        >
            <AppStack.Screen 
            name="home-screen"
            component={HomeScreen}
            />
        </AppStack.Navigator>
    );
};

export default AppNavigation;
