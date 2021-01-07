import { mapGetters, mapActions } from 'vuex'
import { themeList, addCss, removeAllCss } from './book'
import { saveLocation, saveReadTime } from '../utils/localStorage'

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
        roadSetTime() {
            let timer = getReadTime(this.fileName);
            if (!timer) {
                timer = 0;
            }
            this.task = setInterval(() => {
                timer++;
                if (timer % 30 === 0) {
                    saveReadTime(this.fileName, timer);
                }
            }, 1000);
        },
        //刷新当前位置
        refreshLocation() {
            const currentLoction = this.currentBook.rendition.currentLocation();//获取当前页开始的位置
            const startCfi = currentLoction.start.cfi;
            const progress = this.currentBook.locations.percentageFromCfi(startCfi);
            this.setSection(currentLoction.start.index)
            this.setProgress(Math.floor(progress * 100));

            saveLocation(this.fileName, startCfi);
        },
        //页面一加载就跳转到location位置
        display(target, cb) {
            if (target) {
                this.currentBook.rendition.display(target).then(() => {
                    this.refreshLocation()
                    if (cb) cb()
                });
            } else {
                this.currentBook.rendition.display().then(() => {
                    this.refreshLocation()
                    if (cb) cb()
                });
            }
        },
        hideTitleAndMenu() {
            // this.$store.dispatch("setMenuVisible", false);
            this.setMenuVisible(false);
            this.setSettingVisible(-1);
            this.setFontFamilyVisible(false); //字体的隐藏显示
        },
    },

}
export {
    ebookMixin
}