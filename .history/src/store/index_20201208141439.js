import Vue from 'vue'
import vuex from 'vuex'
import book from './modules/book'
import getters from './getters'
import actions from './actions'
Vue.use(vuex)
export default new vuex.Store({
    modules: {
        book
    },
    getters,
    actions
})