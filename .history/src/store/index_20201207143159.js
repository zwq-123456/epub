import Vue from 'vue'
import vuex from 'vuex'
import book from './modules/book'
Vue.use(vuex)
new vuex.Store({
    modules: {
        book
    }
})