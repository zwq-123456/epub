import { mapGetters, mapActions } from 'vuex'

const ebookMixin = {
    computed: {
        ...mapGetters(["fileName",//接收到的参数值
            "menuVisible",//菜单和标题的显示或者隐藏
            'settingVisible',
            'defaultPoint',
            'currentBook',
            'defaultFontFamily',
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
    }, computed: {
        themeList() {
            return themeList(this);
        }, //？？？？？？？？？？？？？
    },
    methods: {
        ...mapActions(["setMenuVisible",
            "setFileName",
            'setSettingVisible',
            'setDefaultPoint',
            'setCurrentBook',
            'setDefaultFontFamily',
            'setFontFamilyVisible',
            'setDefaultTheme',
            'setBookAvailable',
            'setProgress',
            'setSection',
            'setIsPaginating',
            'setNavigation',
            'setCover',
            'setMetadata',
            'setPaginate',
            'setPagelist',
            'setOffsetY',
            'setIsBookmark']),    //引入vuex actions 简化
    },
}
export {
    ebookMixin
}