import React from 'react';
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

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

    const _onPress_Add = () => {
        props.navigation.navigate('add-edit-screen');
    }

    const _onPress_Edit = itemId => {
        // AddEditScreen'e item'in id'sini gönderiyoruz
        props.navigation.navigate('add-edit-screen', {
            itemId
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
                onPress={() => _onPress_Edit(item.id)}
                onLongPress={() => _onLongPress_Item(item.id)}>
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
                    data={dummy}
                    renderItem={_renderItem}
                    ItemSeparatorComponent={_ItemSeparator}
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
