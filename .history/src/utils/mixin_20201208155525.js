import { mapGetters, mapActions } from 'vuex'

export const ebookMixin = {
    computed: {
        ...mapGetters(["fileName", "menuVisible", 'settingVisible']),

    },
    methods: {
        ...mapActions(["setMenuVisible", "setFileName", 'setSettingVisible']),    //引入vuex actions 简化
    },
}