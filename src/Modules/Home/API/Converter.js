const convertSingleItem = (chat, currentUserId) => {
    let dateMoment = getMomentDate(chat.date, chat.time);
    let convertedChat = {
        id: chat.id,
        senderId: chat.senderId,
        senderName: chat.senderName,
        message: chat.message,
        time: getTime(dateMoment),
        color: chat.color,
        dateMoment,
        isMe: chat.senderId === currentUserId,
    };

    return convertedChat;
}

export const convertRawData = data => {
    if (data?.length === 0) {
        return [];
    }

    let convertedList = [];

    let convertedItem;
    for (let itemKey in data) {
        convertedItem = data[itemKey];
        convertedItem.key = itemKey;
        convertedList.push(convertedItem);
    }

    return convertedList;
}