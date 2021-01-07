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
            console.log(state.test, newTest);
            return content.commit('setTest', newTest)
        }
    }
}
export default book