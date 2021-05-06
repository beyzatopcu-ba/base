import React from 'react';
import { Text, TouchableOpacity, Linking } from 'react-native';

const LinkingExample = props => {

    const _onPress = async () => {
        const url = "mailto:?to=topcubeyza@gmail.com";
        const supported = await Linking.canOpenURL(url);

        if (supported) {
            Linking.openURL(url);
        }
        else {
            console.log('not supported')
        }
    }

    return (
        <TouchableOpacity onPress={_onPress}>
            <Text>Git</Text>
        </TouchableOpacity>
    );
};

export default LinkingExample;
