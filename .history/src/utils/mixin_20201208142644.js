import { mapGetters, mapActions } from 'vuex'

export const ebookMixin = {
    computed: {
        ...mapGetters(["fileName", "menuVisible"]),

    },
    methods: {
        ...mapActions(["setMenuVisible", "setFileName"]),    //引入vuex actions 简化
    },
}