import { mapGetters, mapActions } from 'vuex'

export const ebookMixin = {
    computed: {
        ...mapGetters(["fileName", "menuVisible", 'settingVisible']),

    },
    methods: {
        ...mapActions(["setMenuVisible", "setFileName", 'set_SETTINGVSIBLE']),    //引入vuex actions 简化
    },
}