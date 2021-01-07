import { mapGetters, mapActions } from 'vuex'

const ebookMixin = {
    computed: {
        ...mapGetters(["fileName", "menuVisible", 'settingVisible', 'defaultPoint', 'currentBook']),

    },
    methods: {
        ...mapActions(["setMenuVisible", "setFileName", 'setSettingVisible', 'setDefaultPoint', 'setCurrentBook']),    //引入vuex actions 简化
    },
}
export {
    ebookMixin
}