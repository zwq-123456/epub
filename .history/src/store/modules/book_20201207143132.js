const book = {
    state: {
        test: 1
    },
    mutations: {
        setTest(state, newTest) {
            state.test = newTest
        }
    },
    actions: {
        set(content, newTest) {
            return content.commit('setTest', newTest)
        }
    }
}