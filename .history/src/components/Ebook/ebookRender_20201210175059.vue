<template>
  <div class="ebookload">
    <div id="read"></div>
  </div>
</template>
<script>
import { ebookMixin } from "../../utils/mixin";

import Epub from "epubjs";
import {
  saveFontFamily,
  getFontFamily,
  getFontSize,
  saveFontSize,
  getTheme,
  saveTheme,
} from "../../utils/localStorage";
global.epub = Epub;
export default {
  mixins: [ebookMixin], //vuex复用

  methods: {
    //上一页
    prevPage() {
      if (this.rendition) {
        this.rendition.prev();
        this.hideTitleAndMenu();
      }
    },
    //下一页
    nextPage() {
      if (this.rendition) {
        this.rendition.next();
        this.hideTitleAndMenu();
      }
    },
    //菜单栏显示或者隐藏
    toggleShowMenu() {
      // this.$store.dispatch("setMenuVisible", !this.menuVisible);

      if (this.menuVisible) {
        this.setSettingVisible(-1);
        this.setFontFamilyVisible(false); //字体的隐藏显示
      }
      this.setMenuVisible(!this.menuVisible);
    },
    //翻页时菜单栏必须隐藏
    hideTitleAndMenu() {
      // this.$store.dispatch("setMenuVisible", false);
      this.setMenuVisible(false);
      this.setSettingVisible(-1);
      this.setFontFamilyVisible(false); //字体的隐藏显示
    },
    //缓存字体大小的设置
    initSetFontSize() {
      let fontSize = getFontSize(this.fileName); //获取缓存字体大小
      if (!fontSize) {
        saveFontSize(this.fileName, this.defaultPoint);
      } else {
        //如果能获取到字体
        this.rendition.themes.fontSize(fontSize); //重新渲染字体大小
        this.setDefaultPoint(fontSize); //传入新的字体大小
      }
    },
    //缓存字体的设置
    initSetFontFamily() {
      let font = getFontFamily(this.fileName); //获取缓存字体
      if (!font) {
        saveFontFamily(this.fileName, this.defaultFontFamily);
      } else {
        //如果能获取到字体
        this.rendition.themes.font(font); //重新渲染字体
        this.setDefaultFontFamily(font); //传入新的默认字体
      }
    },
    //缓存主题的设置
    initSetFontThemes() {
      let Themes = getTheme(this.fileName); //获取缓存主题
      if (!themes) {
        saveTheme(this.fileName, this.defaultTheme);
      } else {
        this.rendition.themes.theme(Themes); //重新渲染主题
      }
    },
    initEpub() {
      const baseUrl = " http://192.168.1.113:808/epub/" + this.fileName + ".epub";
      this.book = new Epub(baseUrl);
      this.setCurrentBook(this.book);
      this.rendition = this.book.renderTo("read", {
        width: window.innerWidth,
        height: window.innerHeight,
        methods: "default",
      });
      this.rendition.display().then(() => {
        this.initSetFontSize;
        this.initSetFontFamily;
        this.initSetFontThemes;
      });
      this.rendition.on("touchstart", (event) => {
        this.touchStartX = event.changedTouches[0].clientX;
        this.touchStartTime = event.timeStamp;
      });
      this.rendition.on("touchend", (event) => {
        const offsetX = event.changedTouches[0].clientX - this.touchStartX; //离开时的偏移量
        const timeSet = event.timeStamp - this.touchStartTime; //开始到离开时的时间
        if (offsetX > 40 && timeSet < 500) {
          this.nextPage();
        } else if (offsetX < -40 && timeSet < 500) {
          this.prevPage();
        } else {
          this.toggleShowMenu();
        }
        // event.preventDefault(); //禁止默认行为;
        // event.stopPropagation(); //禁止传播;
      });
      this.rendition.hooks.content.register((contents) => {
        Promise.all([
          contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/fonts/daysOne.css`),
          contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/fonts/cabin.css`),
          contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/fonts/montserrat.css`),
          contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/fonts/tangerine.css`),
        ]).then(() => {
          console.log("字体加载完成");
        });
      }); //从外面导入主题包
    },
  },
  mounted() {
    const fileName = this.$route.params.fileName.split("|").join("/");
    this.setFileName(fileName).then(() => {
      this.initEpub();
    });
  },
};
</script>
<style scoped>
@import "../../assets/styles/global.scss";
</style>
