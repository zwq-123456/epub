import Vue from 'vue'
import vuex from 'vuex'
import book from './modules/book'
Vue.use(vuex)
export default new vuex.Store({
    modules: {
        book
    }
})