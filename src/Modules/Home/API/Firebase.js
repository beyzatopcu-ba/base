import database from '@react-native-firebase/database';
import { getCurrentUser } from '../../Auth';
import { convertRawData } from './Converter';

export const subscribeToItemData = (onDataRetrieved) => {
    const userId = getCurrentUser().uid;

    database()
        .ref(`/itemThumbnailList/${userId}`)
        .on('value', snapshot => {
            const rawData = snapshot.val();
            const convertedList = convertRawData(rawData);
            onDataRetrieved(convertedList);
        });

    return () => {
        database()
            .ref(`/itemThumbnailList/${userId}`)
            .off('value');
    }
}

export const getItemDetail = (itemKey, onRetrieved) => {
    database()
        .ref(`/itemList/${itemKey}`)
        .once('value')
        .then(snapshot => {
            onRetrieved(snapshot.val())
        })
}

export const addItem = async (item, onComplete) => {
    try {
        // Sade objeyi oluşturalım (Anasayfada görünen alanlar)
        /// **** Aşağıdaki alanı uygulamanıza göre değiştirin **** ///
        const itemThumbnail = {
            title: item.title,
            isBought: false,
        };
        /// **** Yukarıdaki alanı uygulamanıza göre değiştirin **** ///

        // Şu anki user'ın id'sini alalım
        const userId = getCurrentUser().uid;

        // Sade objeyi itmek için user'ın id'sinin altından bir referans alalım
        const newItemThumbnailRef = database()
            .ref(`/itemThumbnailList/${userId}`)
            .push();

        // Bu referansın değerini sade objemiz yapalım.
        await newItemThumbnailRef.set(itemThumbnail);

        // Bir önceki adımda firebase'in bize verdiği key'i alalım
        const itemKey = newItemThumbnailRef.key;
        // Bu key ile database'e item'in detayını ekleyelim.
        await database()
            .ref(`/itemList/${itemKey}`)
            .set(item);

        onComplete();
    } catch (error) {

    }
}

export const updateItem = async (item, onComplete) => {
    try {
        await database()
            .ref(`/itemList/${item.key}`)
            .update(item);

        /// **** Aşağıdaki alanı uygulamanıza göre değiştirin **** ///
        const itemThumbnail = {
            title: item.title,
            isBought: item.isBought,
        }
        /// **** Yukarıdaki alanı uygulamanıza göre değiştirin **** ///
        
        const userId = getCurrentUser().uid;
        await database()
            .ref(`/itemThumbnailList/${userId}/${item.key}`)
            .update(itemThumbnail);

        onComplete();
    } catch (error) {
        console.log(error);
    }
}

export const deleteItem = itemKey => {
    const userId = getCurrentUser().uid;
    database()
        .ref(`/itemThumbnailList/${userId}/${itemKey}`)
        .remove();

    database()
        .ref(`/itemList/${itemKey}`)
        .remove();
}