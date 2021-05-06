export const convertRawData = rawData => {
    // Henüz data yoksa, boş array döndür
    if (rawData?.length === 0) {
        return [];
    }

    let convertedList = [];
    let item;

    // rawData bir obje ve o objenin key'leri arasında iterate edelim
    for (let itemKey in rawData) {
        // sıradaki item'i alalım
        item = rawData[itemKey];
        // içine key koyalım
        item.key = itemKey;
        // döndürülecek listeye ekleyelim
        convertedList.push(item);
    }

    return convertedList;
}