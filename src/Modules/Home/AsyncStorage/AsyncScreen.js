import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncScreen = props => {

    const [input, setInput] = useState('');
    const [loadedText, setLoadedText] = useState('');

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [user, setUser] = useState(null);

    const _onPress_Save = async () => {
        try {
            await AsyncStorage.setItem('myInput', input);
            console.log('Kaydettim')
          } catch (e) {
            // saving error
            console.log(e);
          }
    }

    const _onPress_Load = async () => {
        try {
            setLoadedText('');
            const value = await AsyncStorage.getItem('myInput');
            console.log('Geri çektiğim değer', value)
            setLoadedText(value);
        } catch (error) {
            console.log('error')
        }

    }

    const _onPress_Save_Object = async () => {

        const user = {
            name,
            surname,
        };

        try {
            
            // Objeyi JSON string'e çevir
            const userJSON = JSON.stringify(user);
            console.log(userJSON);
            await AsyncStorage.setItem('user', userJSON);
            console.log('Kullanıcıyı kaydettim')
            
          } catch (e) {
            // saving error
            console.log(e);
          }
    }

    const _onPress_Load_Object = async () => {
        try {
            const userJSON = await AsyncStorage.getItem('user');
            if (userJSON) {
                const user = JSON.parse(userJSON);
                setUser(user);
            }
            else {
                console.log('Bu key\'de bir değer yok');
            }
        } catch (error) {
            console.log('error')
        }

    }

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {/* String kaydetmek için */}
            <View style={{padding: 10, backgroundColor: 'pink'}}>
                <TextInput
                    onChangeText={setInput}
                    placeholder={"Bir şeyler yaz"}
                    placeholderTextColor={"grey"}
                />
            </View>
            <TouchableOpacity onPress={_onPress_Save}>
                <Text>Kaydet</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={_onPress_Load}>
                <Text>Geri yükle</Text>
            </TouchableOpacity>
            <Text style={{marginBottom: 50}}>{loadedText}</Text>

            {/* Obje kaydetmek için */}
            <View style={{padding: 10, backgroundColor: 'pink', marginBottom: 5}}>
                <TextInput
                    onChangeText={setName}
                    placeholder={"İsim"}
                    placeholderTextColor={"grey"}
                />
            </View>
            <View style={{padding: 10, backgroundColor: 'pink', marginBottom: 5}}>
                <TextInput
                    onChangeText={setSurname}
                    placeholder={"Soyisim"}
                    placeholderTextColor={"grey"}
                />
            </View>
            <TouchableOpacity onPress={_onPress_Save_Object}>
                <Text>Kaydet</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={_onPress_Load_Object}>
                <Text>Geri yükle</Text>
            </TouchableOpacity>
            <Text>{user?.name}</Text>
            <Text>{user?.surname}</Text>
        </SafeAreaView>
    );
};

export default AsyncScreen;
