const user1Id = "abc123def";
// user1'in itemlerinin id'leri
const user1Items = [
    "asd65as6d",
    "kas6d7asb",
]
const user2Id = "kas23k34k23";

const root = {
    // item'lerin tüm detaylarını barındırıyor
    itemList: {
        "asd65as6d": {
            title: "elma",
            count: 1,
            detail: "kilo",
            isBought: false,
        },
        "kas6d7asb": {
            title: "armut",
            count: 2,
            detail: "kilo",
            isBought: true,
        }
    },
    itemThumbnailList: {
        "abc123def": {
            "asd65as6d": {
                title: "elma",
                isBought: false,
            },
            "kas6d7asb": {
                title: "armut",
                isBought: true,
            }
        },
        "kas23k34k23": {

        }
    }
}