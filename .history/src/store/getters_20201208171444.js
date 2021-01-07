const book = {
    fileName: state => state.book.fileName,
    menuVisible: state => state.book.menuVisible,
    settingVisible: state => state.book.settingVisible,
    defaultPoint: state => state.book.defaultPoint,
    currentBook: state => state.book.currentBook
}
export default book