<template>
  <div class="ebookload">
    <div id="read"></div>
  </div>
</template>
<script>
import { ebookMixin } from "../../utils/mixin";

import Epub from "epubjs";
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
        this.setFontFamilyVisible(false);
      }
      this.setMenuVisible(!this.menuVisible);
    },
    //翻页时菜单栏必须隐藏
    hideTitleAndMenu() {
      // this.$store.dispatch("setMenuVisible", false);
      this.setMenuVisible(false);
      this.setSettingVisible(-1);
      this.setFontFamilyVisible(false);
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
      this.rendition.display();
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
      console.log(baseUrl);
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
