import { mapGetters, mapActions } from 'vuex'

const ebookMixin = {
    computed: {
        ...mapGetters(["fileName", "menuVisible", 'settingVisible', 'defaultPoint', 'currentBook', 'defaultFontFamily',
            'fontFamilyVisible',
            'defaultTheme',
            'bookAvailable',
            'progress',
            'section',
            'isPaginating',
            'navigation',
            'cover',
            'metadata',

            'paginate',
            'pagelist',
            'offsetY',
            'isBookmark']),

    },
    methods: {
        ...mapActions(["setMenuVisible", "setFileName", 'setSettingVisible', 'setDefaultPoint', 'setCurrentBook']),    //引入vuex actions 简化
    },
}
export {
    ebookMixin
}