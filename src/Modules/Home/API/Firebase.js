import database from '@react-native-firebase/database';
import { getCurrentUser } from '../../Auth';
import { convertRawData } from './Converter';

export const subscribeToItemData = (onDataRetrieved) => {
    const userId = getCurrentUser().uid;
    database()
        .ref('/itemThumbnailList/' + userId)
        .on('value', snapshot => {
            const rawData = snapshot.val();
            const convertedList = convertRawData(rawData);
            onDataRetrieved(convertedList);
        });

    return () => {
        database().ref('/itemThumbnailList/' + userId).off('value');
    }
}

export const getItemDetail = (itemKey, onRetrieved) => {
    database()
        .ref('/itemList/' + itemKey)
        .once('value')
        .then(snapshot => {
            onRetrieved(snapshot.val())
        })
}

export const addItem = async (item, onAdded) => {
    const itemThumbnail = {
        title: item.title,
        isBought: false,
    }

    const userId = getCurrentUser().uid;
    const newItemThumbnailRef = database()
        .ref('/itemThumbnailList/' + userId)
        .push()

    await newItemThumbnailRef.set(itemThumbnail);

    await database()
        .ref('/itemList/' + newItemThumbnailRef.key)
        .set(item);
    
    onAdded();
}

export const deleteItem = itemKey => {
    const userId = getCurrentUser().uid;
    database()
        .ref('/itemThumbnailList/' + userId + '/' + itemKey)
        .remove();

    database()
        .ref('/itemList/' + itemKey)
        .remove();
}

export const updateItem = async (item, onUpdated) => {

    const itemThumbnail = {
        title: item.title,
        isBought: item.isBought,
    };

    await database()
        .ref('/itemList/' + item.key)
        .update(item);

    const userId = getCurrentUser().uid;
    await database()
        .ref('/itemThumbnailList/' + userId + '/' + item.key)
        .update(itemThumbnail);

    onUpdated();
}