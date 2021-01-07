import Stroage from 'web-storage-cache'
let localStroage = new Stroage()
export function setLocalStorage(key, value) {
    return localStroage.set(key, value)
}
export function getLocalStorage(key) {
    return localStroage.get(key)
}
export function removeLocalStorage(key) {
    return localStroage.delete(key)
}
export function clearLocalStorage() {
    return localStroage.clear()
}//清空所有的缓存
export function setBookObject(fileName, key, value) {
    let book = getLocalStorage(`${fileName}`)
    if (!book) {
        book = {}
    }
    book[key] = value
    setLocalStorage(`${fileName}`, book)
};
export function getBookObject(fileName, key) {
    let book = getLocalStorage(`${fileName}`)
    if (book) {
        return book[key]
    }
    else {
        return null
    }
}
export function getFontFamily(fileName) {
    return getBookObject(fileName, 'fontFamily')
}//获取localStorage中的字体。

export function saveFontFamily(fileName, font) {
    return setBookObject(fileName, 'fontFamily', font)
}