import database from '@react-native-firebase/database';
import { getCurrentUser } from '../../Auth';

export const addItem = async (item, onComplete) => {
    try {
        // Sade objeyi oluşturalım (Anasayfada görünen alanlar)
        // Bu alanı uygulamanıza göre değiştirin
        const itemThumbnail = {
            title: item.title,
            isBought: false,
        };

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