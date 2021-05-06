import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { deleteItem, subscribeToItemData } from '../API/Firebase';

import styles from '../Styles/HomeScreenStyles';

const dummy = [
    {
        id: 1,
        title: "Elma",
        isBought: false,
    },
    {
        id: 2,
        title: "Armut",
        isBought: true,
    },
]

const HomeScreen = props => {

    const [ itemList, setItemList ] = useState(null);
    const [ isDeleteModeOn, setIsDeleteModeOn ] = useState(false);

    // Anasayfa açıldığında item listesindeki değişikliklere üye olsun
    // Değişiklik olduğunda, yeni item listesini state'e atsın
    useEffect(() => {
        // subscribe
        const off = subscribeToItemData(data => {
            setItemList(data);
        });

        // unsubscribe
        return () => {
            off();
        }
    }, []);

    const _onPress_AddDelete = () => {
        if (isDeleteModeOn) {
            setIsDeleteModeOn(false);
        }
        else {
            props.navigation.navigate('add-edit-screen');
        }
    }

    const _onLongPress_AddDelete = () => {
        setIsDeleteModeOn(true);
    }

    const _onPress_EditDelete = item => {
        if (isDeleteModeOn) {
            // item'i sil
            deleteItem(item.key);
        }
        else {
            // AddEditScreen'e item'in id'sini gönderiyoruz
            props.navigation.navigate('add-edit-screen', {
                itemKey: item.key
            })
        }
    }

    const _renderItem = ({item}) => {
        // item'e basıldığında id'sini gönderiyoruz
        return (
            <TouchableOpacity 
                style={styles.itemTouchable} 
                onPress={() => _onPress_EditDelete(item)}>
                <Text style={styles.itemText}>{item.title}</Text>
            </TouchableOpacity>
        )
    }

    const _ItemSeparator = () => {
        return <View style={styles.separator} />
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <FlatList 
                    style={styles.flatList}
                    data={itemList}
                    renderItem={_renderItem}
                    ItemSeparatorComponent={_ItemSeparator}
                    keyExtractor={item => item.key}
                />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity 
                        style={styles.touchable} 
                        onPress={_onPress_AddDelete}
                        onLongPress={_onLongPress_AddDelete}>
                        <Text style={styles.text}>{
                            isDeleteModeOn ? 'ÇIK' : 'YENİ'
                        }</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;
