import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DeviceInfo from 'react-native-device-info';

const DeviceInfoScreen = props => {

    useEffect(() => {
        const applicationName = DeviceInfo.getApplicationName();
        console.log(applicationName);
        DeviceInfo.getBatteryLevel().then(value => {
            console.log('battery level', value)
        })

        const deviceType = DeviceInfo.getDeviceType();
        console.log('device type', deviceType);

        DeviceInfo.isEmulator().then((value) => {
            console.log('Is emulator', value)
        })
    }, []);


    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            
            
        </SafeAreaView>
    );
};

export default DeviceInfoScreen;
