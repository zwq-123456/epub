export const actions = {
    setFileName(content, fileName) {
        return content.commit('set_File_Name', fileName)
    },
    setMenuVisible(content, menuVisible) {
        return content.commit('set_MENUVISIBLE', menuVisible)
    }
}