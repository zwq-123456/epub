const actions = {
    setFileName(content, fileName) {
        return content.commit('set_File_Name', fileName)
    },
    setMenuVisible(content, menuVisible) {
        return content.commit('set_MENUVISIBLE', menuVisible)
    },
    settingVisible(content, settingVisible) {
        return content.commit('set_SETTINGVSIBLE', settingVisible)
    }
}
export default actions 
