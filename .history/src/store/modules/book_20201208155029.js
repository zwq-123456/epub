const book = {
    state: {
        fileName: '',
        menuVisible: false,
        settingVisible: -1//-1不显示 0字号 1主题 2进度条 3目录
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
        }

    },

}
export default book