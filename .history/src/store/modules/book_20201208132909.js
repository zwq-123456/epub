const book = {
    state: {
        fileName: '',
        menuVisible: false
    },
    mutations: {
        set_File_Name(state, fileName) {
            state.fileName = fileName
        },
        set_MENUVISIBLE(state, menuVisible) {
            state.menuVisible = menuVisible
        }

    },
    actions: {
        setFileName(content, fileName) {
            return content.commit('set_File_Name', fileName)
        },
        setMenuVisible(content, menuVisible) {
            return content.commit('set_MENUVISIBLE', menuVisible)
        }
    }
}
export default book