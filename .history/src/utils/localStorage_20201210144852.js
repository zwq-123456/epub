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

export function saveBookShelf(shelf) {
    return setLocalStorage('shelf', shelf)
}

export function getBookShelf() {
    return getLocalStorage('shelf')
}

export function setBookObject(fileName, key, value) {
    let book = getLocalStorage(`${fileName}-info`)
    if (!book) {
        book = {}
    }
    book[key] = value
    setLocalStorage(`${fileName}-info`, book)
}

export function getBookObject(fileName, key) {
    let book = getLocalStorage(`${fileName}-info`)
    if (book) {
        return book[key]
    } else {
        return null
    }
}
export function getFontSize(fileName) {
    return getBookObject(fileName, 'fontSize')
}//字体的大小

export function saveFontSize(fileName, fontSize) {
    setBookObject(fileName, 'fontSize', fontSize)
}

export function getFontFamily(fileName) {
    return getBookObject(fileName, 'fontFamily')
}//字体

export function saveFontFamily(fileName, fontFamily) {
    setBookObject(fileName, 'fontFamily', fontFamily)
}

export function getLocale() {
    return getLocalStorage('locale')
}

export function saveLocale(locale) {
    return setLocalStorage('locale', locale)
}

export function getLocation(fileName) {
    return getBookObject(fileName, 'location')
}

export function saveLocation(fileName, location) {
    setBookObject(fileName, 'location', location)
}

export function getBookmark(fileName) {
    return getBookObject(fileName, 'bookmark')
}

export function saveBookmark(fileName, bookmark) {
    setBookObject(fileName, 'bookmark', bookmark)
}

export function getReadTime(fileName) {
    return getBookObject(fileName, 'time')
}

export function saveReadTime(fileName, theme) {
    setBookObject(fileName, 'time', theme)
}

export function getProgress(fileName) {
    return getBookObject(fileName, 'progress')
}

export function saveProgress(fileName, progress) {
    setBookObject(fileName, 'progress', progress)
}

export function getNavigation(fileName) {
    return getBookObject(fileName, 'navigation')
}

export function saveNavigation(fileName, navigation) {
    setBookObject(fileName, 'navigation', navigation)
}

export function getMetadata(fileName) {
    return getBookObject(fileName, 'metadata')
}

export function saveMetadata(fileName, metadata) {
    setBookObject(fileName, 'metadata', metadata)
}

export function getCover(fileName) {
    return getBookObject(fileName, 'cover')
}

export function saveCover(fileName, cover) {
    setBookObject(fileName, 'cover', cover)
}


export function getTheme(fileName) {
    return getBookObject(fileName, 'theme')
}

export function saveTheme(fileName, theme) {
    setBookObject(fileName, 'theme', theme)
}

