import React, {useState} from 'react';
import {
    Image,
    KeyboardAvoidingView,
    SafeAreaView,
    Text,
    View,
    TouchableOpacity,
    Keyboard,
    Platform,
} from 'react-native';

import AuthInput from '../Components/AuthInput';
import AuthButton from '../Components/AuthButton';

import {Images} from '../../../StylingConstants';

import getStyles from '../styles/AuthScreenStyles';
import { useThemedStyles } from '../../Theming';
import { tn, useLocalization, useLocale } from '../../Localization';

const AuthScreen = props => {

    const [isLogin, setIsLogin] = useState(true);

    const styles = useThemedStyles(getStyles);
    const loc = useLocalization();

    const locale = useLocale();
    const loginUppercase = loc.t(tn.login).toLocaleUpperCase(locale);
    const signupUppercase = loc.t(tn.signUp).toLocaleUpperCase(locale);

    return (
        <SafeAreaView style={styles.safeArea}>
            <KeyboardAvoidingView 
                style={styles.keyboardAvoiding} 
                behavior={Platform.OS === 'ios' ? 'padding' : null} 
                keyboardVerticalOffset={0}>
                <TouchableOpacity 
                    style={styles.container}
                    activeOpacity={1}
                    onPress={Keyboard.dismiss}
                    >
                    <View style={styles.appLogoContainer}>
                        <Image source={Images.appLogoLight} style={styles.image} />
                    </View>
                    <View style={styles.inputsContainer}>
                    {
                            isLogin ?
                                null
                                :
                                <View style={styles.inputContainer}>
                                    <AuthInput
                                        value={props.nameValue}
                                        onChangeText={props.onChangeText_Name}
                                        autoCapitalize={'words'}
                                        placeholder={loc.t(tn.username)} />
                                </View>
                        }
                        <View style={styles.inputContainer}>
                            <AuthInput
                                value={props.emailValue}
                                onChangeText={props.onChangeText_Email}
                                autoCapitalize={'none'}
                                placeholder={loc.t(tn.email)} />
                        </View>
                        <View style={styles.inputContainer}>
                            <AuthInput
                                value={props.passwordValue}
                                onChangeText={props.onChangeText_Password}
                                autoCapitalize={'none'}
                                placeholder={loc.t(tn.password)}
                                secureTextEntry={true} />
                        </View>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <AuthButton
                            onPress={isLogin ? props.onPress_SignIn : props.onPress_SignUp}
                            disabled={false}
                            text={isLogin ? loginUppercase : signupUppercase} />
                        <TouchableOpacity style={styles.signupTouchable} onPress={() => setIsLogin(!isLogin)}>
                            <Text style={styles.signupText}>
                                {isLogin ? loc.t(tn.signUp) : loc.t(tn.login)}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.appNameContainer}>
                        <Text style={styles.appNameText}>MUHABBET</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );

};

export default AuthScreen;
