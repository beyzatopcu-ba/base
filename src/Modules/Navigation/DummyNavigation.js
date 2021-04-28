import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const DummyScreen = props => {
    return (
        <View>
            <Text>Deneme</Text>
        </View>
    );
}

const DummyStack = createStackNavigator();

const DummyNavigation = () => {
    return (
        <DummyStack.Navigator>
            <DummyStack.Screen
                name="dummy-screen"
                component={DummyScreen} />
        </DummyStack.Navigator>
    );
};

export default DummyNavigation;
