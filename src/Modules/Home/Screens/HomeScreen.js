import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { subscribeToItemData } from '../API/Firebase';

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

    const _onPress_Add = () => {
        props.navigation.navigate('add-edit-screen');
    }

    const _onPress_Edit = item => {
        // AddEditScreen'e item'in id'sini gönderiyoruz
        props.navigation.navigate('add-edit-screen', {
            itemKey: item.key
        })
    }

    // İtem silinsin
    const _onLongPress_Item = itemId => {

    }

    const _renderItem = ({item}) => {
        // item'e basıldığında id'sini gönderiyoruz
        return (
            <TouchableOpacity 
                style={styles.itemTouchable} 
                onPress={() => _onPress_Edit(item)}
                onLongPress={() => _onLongPress_Item(item)}>
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
                    <TouchableOpacity style={styles.touchable} onPress={_onPress_Add}>
                        <Text style={styles.text}>Yeni</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;
