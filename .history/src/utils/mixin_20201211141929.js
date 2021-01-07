import { mapGetters, mapActions } from 'vuex'
import { themeList, addCss } from './book'


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

        themeList() {
            return themeList(this);
        }
    }, //？？？？？？？？？？？？？,
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
        initGlobalCss() {
            removeAllCss()
            switch (this.defaultTheme) {
                case "Default":
                    addCss("http://192.168.1.113:808/theme/theme_default.css");
                    break;
                case "Eye":
                    addCss("http://192.168.1.113:808/theme/theme_eye.css");
                    break;
                case "Gold":
                    addCss("http://192.168.1.113:808/theme/theme_gold.css");
                    break;
                case "Night":
                    addCss("http://192.168.1.113:808/theme/theme_night.css");
                    break;
            }
        },
    },

}
export {
    ebookMixin
}