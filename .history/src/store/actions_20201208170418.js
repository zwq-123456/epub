const actions = {
    setFileName(content, fileName) {
        return content.commit('set_File_Name', fileName)
    },
    setMenuVisible(content, menuVisible) {
        return content.commit('set_MENUVISIBLE', menuVisible)
    },
    setSettingVisible(content, settingVisible) {
        return content.commit('set_SETTINGVSIBLE', settingVisible)
    },
    setDefaultPoint(content, defaultPoint) {
        return content.commit('set_DEFAULTPOINT', defaultPoint)
    }
}
export default actions 
