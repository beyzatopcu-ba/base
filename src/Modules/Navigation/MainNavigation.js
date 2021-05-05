import React from 'react';
import { StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigation from './AppNavigation';
import AuthNavigation from './AuthNavigation';
import { userSelector } from '../Auth';
import { cn, ThemeModes, useTheme, useThemedColors } from '../Theming';

const MainNavigation = (props) => {
    const loggedInUser = useSelector(userSelector);
    const theme = useTheme();
    const colors = useThemedColors();
    const barStyle = theme === ThemeModes.light ? 'light-content' : 'dark-content';
    return (
        <>
            <StatusBar barStyle={barStyle} backgroundColor={colors[cn.header.background]}/>
            <NavigationContainer>
                {
                    loggedInUser ?
                    <AppNavigation />
                    :
                    <AuthNavigation/>
                }
            </NavigationContainer>
        </>
    );
};

export default MainNavigation;
