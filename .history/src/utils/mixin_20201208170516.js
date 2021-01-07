import { mapGetters, mapActions } from 'vuex'

export const ebookMixin = {
    computed: {
        ...mapGetters(["fileName", "menuVisible", 'settingVisible', 'defaultPoint']),

    },
    methods: {
        ...mapActions(["setMenuVisible", "setFileName", 'setSettingVisible', 'setDefaultPoint']),    //引入vuex actions 简化
    },
}