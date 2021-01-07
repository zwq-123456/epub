<template>
  <transition name="slide-up">
    <div class="fontSizeBar" v-show="menuVisible && settingVisible == 1">
      <div class="setting_theme">
        <div
          class="setting-themes-item"
          v-for="(item, index) in themeList"
          :key="index"
          @click="setThemes(index)"
        >
          <div
            class="preview"
            :class="{ no_border: item.style.body.background != '#fff' }"
            :style="{ backgroundColor: item.style.body.background }"
          ></div>
          <div class="test" :class="{ select: item.name == defaultTheme }">
            {{ item.alias }}
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import { ebookMixin } from "../../utils/mixin";
import { themeList } from "../../utils/book";
export default {
  mixins: [ebookMixin],

  methods: {
    setThemes(index) {
      let theme = this.themeList[index];
      this.setDefaultTheme(theme.name).then(() => {
        this.currentBook.rendition.themes.select(this.defaultTheme);
      }); //设置默认主题(值变了要异步调用)
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../assets/styles/global";
.fontSizeBar {
  position: absolute;
  bottom: px2rem(48);
  width: 100%;
  z-index: 101;
  height: px2rem(90);
  left: 0;
  box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, 0.15);
  background-color: white;

  .setting_theme {
    display: flex;
    height: 100%;
    .setting-themes-item {
      flex: 1;
      display: flex;
      flex-direction: column;
      padding: 5px;

      box-sizing: border-box;
      .preview {
        flex: 1;
        border: 1px solid #ccc;
        box-sizing: border-box;
        &.no_border {
          border: none;
        }
      }
      .test {
        flex: 0 0 px2rem(30);
        font-size: px2rem(16);
        color: #ccc;
        @include center;
        &.select {
          color: #333;
        }
      }
    }
  }
}
</style>
