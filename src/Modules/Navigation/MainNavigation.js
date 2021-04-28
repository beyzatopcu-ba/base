import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DummyNavigation from './DummyNavigation';

const MainNavigation = (props) => {
    return (
        <NavigationContainer>
            <DummyNavigation />
        </NavigationContainer>
    );
};

export default MainNavigation;
