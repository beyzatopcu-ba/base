import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { addItem, getItemDetail, updateItem } from '../API/Firebase';
import LinkingExample from '../Components/LinkingExample';

import styles from '../Styles/AddEditScreenStyles';

const AddEditScreen = props => {

    const [ itemName, setItemName ] = useState('');
    const [ itemCount, setItemCount ] = useState('');
    const [ itemDetail, setItemDetail ] = useState('');
    const [ itemIsBought, setItemIsBought ] = useState(false);

    // Edit ekranı için gelen item'in id'si (eğer bir şey gönderilmemişse params: undefined oluyor)
    const itemKey = props.route.params?.itemKey;

    // Ekran ilk açıldığında title'ı belirlensin
    useEffect(() => {
        props.navigation.setOptions({
            title: itemKey ? 'DÜZENLE' : 'YENİ EKLE'
        })
    }, []);

    // Ekrana gelen bir itemKey varsa, item'in detayları çekilsin
    useEffect(() => {
        if (itemKey) {
            getItemDetail(itemKey, item => {
                setItemName(item.title);
                setItemCount(item.count);
                setItemDetail(item.detail);
                setItemIsBought(item.isBought);
            });
        }
    }, []);

    const _onPress_AddSave = () => {
        const item = {
            key: itemKey,
            title: itemName,
            count: itemCount,
            detail: itemDetail,
            isBought: itemIsBought,
        };

        const onComplete = () => {
            props.navigation.goBack();
        }

        if (itemKey) {
            console.log('updating')
            updateItem(item, onComplete);
        }
        else {
            addItem(item, onComplete);
        }
    }

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
                <LinkingExample />
                <TouchableOpacity style={styles.touchable} onPress={_onPress_AddSave}>
                    <Text style={styles.buttonText}>
                        {itemKey ? 'KAYDET' : 'EKLE'}
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default AddEditScreen;
