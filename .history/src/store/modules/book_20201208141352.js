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

}
export default book