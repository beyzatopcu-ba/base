import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { useSelector } from 'react-redux';
import { isLoadingSelector } from './LoadingRedux';

const styles = StyleSheet.create({
    modal: {

    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const LoadingManager = props => {

    const isLoading = useSelector(isLoadingSelector);

    return (
        <Modal
            isVisible={isLoading}
            style={styles.modal}
        >
            <View style={styles.container}>
                <ActivityIndicator size="large" />
            </View>
        </Modal>
    )
}

export default LoadingManager;