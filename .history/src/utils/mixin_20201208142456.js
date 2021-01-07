import { mapGetters, mapActions } from 'vuex'

export const ebookMixin = {
    computed: {
        ...mapGetters(["fileName", "menuVisible"]),
        ...mapActions(["setMenuVisible"]),    //引入vuex actions 简化
    },
}