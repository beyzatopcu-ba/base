import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

import styles from '../Styles/AddEditScreenStyles';

const AddEditScreen = props => {

    const [ itemName, setItemName ] = useState('');
    const [ itemCount, setItemCount ] = useState('');
    const [ itemDetail, setItemDetail ] = useState('');

    // Edit ekranı için gelen item'in id'si (eğer bir şey gönderilmemişse params: undefined oluyor)
    const itemId = props.route.params?.itemId;

    // Ekran ilk açıldığında title'ı belirlensin
    useEffect(() => {
        props.navigation.setOptions({
            title: itemId ? 'DÜZENLE' : 'YENİ EKLE'
        })
    }, []);

    // Ekrana gelen bir itemId varsa, item'in detayları çekilsim
    useEffect(() => {
        
    }, []);

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <ScrollView style={styles.scroll}>
                    <View style={styles.inputContainer} >
                        <TextInput 
                            value={itemName}
                            onChangeText={setItemName}
                            style={styles.input} 
                            placeholder="Item adı"
                            placeholderTextColor="rgba(0,0,0,0.3)"/>
                    </View>

                    <View style={styles.inputContainer} >
                        <TextInput 
                            value={itemCount}
                            onChangeText={setItemCount}
                            style={styles.input} 
                            placeholder="Adet"
                            placeholderTextColor="rgba(0,0,0,0.3)"
                            keyboardType="number-pad" />
                    </View>

                    <View style={styles.inputContainer} >
                        <TextInput 
                            value={itemDetail}
                            onChangeText={setItemDetail}
                            style={styles.input} 
                            placeholder="Açıklama"
                            placeholderTextColor="rgba(0,0,0,0.3)"/>
                    </View>
                </ScrollView>
                <TouchableOpacity style={styles.touchable}>
                    <Text style={styles.buttonText}>
                        {itemId ? 'KAYDET' : 'EKLE'}
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default AddEditScreen;
