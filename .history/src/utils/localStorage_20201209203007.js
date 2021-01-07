import Stroage from 'web-storage-cache'
let localStroage = new Stroage()
export function setLocalStroage(key, value) {
    return localStroage.set(key, value)
}
export function getLocalStroage(key) {
    return localStroage.get(key)
}
export function removeLocalStroage(key) {
    return localStroage.delete(key)
}
export function clearLocalStorage() {
    return localStroage.clear()
}//清空所有的缓存
