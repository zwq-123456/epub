const book = {
    state: {
        fileName
    },
    mutations: {
        set_File_Name(state, fileName) {
            state.fileName = fileName
        }
    },
    actions: {
        setFileName(content, fileName) {
            return content.commit(' set_File_Name', fileName)
        }
    }
}
export default book