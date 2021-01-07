const book = {
    state: {
        fileName: '',
        menuVisible: false,//菜单栏
        settingVisible: -1,//-1不显示 0字号 1主题 2进度条 3目录
        defaultPoint: 16,//设置默认字体
        currentBook: null//利用vuex实现this.book共享
    },
    mutations: {
        set_File_Name(state, fileName) {
            state.fileName = fileName
        },
        set_MENUVISIBLE(state, menuVisible) {
            state.menuVisible = menuVisible
        },
        set_SETTINGVSIBLE(state, settingVisible) {
            state.settingVisible = settingVisible
        },
        set_DEFAULTPOINT(state, defaultPoint) {
            state.defaultPoint = defaultPoint
        },
        set_CURRENTBOOK(state, currentBook) {
            state.currentBook = currentBook
        }

    },

}
export default book