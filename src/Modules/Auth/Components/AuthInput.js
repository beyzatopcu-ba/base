import React from 'react';

import { TextInput, View } from 'react-native';

import BorderedBox from '../../../Components/BorderedBox';
import { useThemedValues, cn } from '../../Theming';

import getStyles from '../styles/AuthInputStyles';

const AuthInput = props => {

    const {styles, colors} = useThemedValues(getStyles);

    return (
        <BorderedBox borderColor={colors[cn.auth.inputBorder]}>
            <View style={styles.inputContainer}>
                <TextInput
                    autoCapitalize={props.autoCapitalize}
                    secureTextEntry={props.secureTextEntry}
                    style={styles.input}
                    value={props.value}
                    onChangeText={props.onChangeText}
                    autoCorrect={false}
                    placeholder={props.placeholder}
                    placeholderTextColor={colors[cn.auth.inputPlaceholder]} />
            </View>
        </BorderedBox>
    );
};

export default AuthInput;
