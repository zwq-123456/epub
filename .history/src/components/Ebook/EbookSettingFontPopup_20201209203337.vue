<template>
  <transition name="popup-slide-up">
    <div class="ebook-pop-list" v-show="fontFamilyVisible">
      <div class="ebook-pop-list-title">
        <div class="ebook-pop-title-icon" @click="hide">
          <span class="iconfont icon-jiantou9"></span>
        </div>
        <span class="ebook-pop-title-text">选择字体</span>
      </div>
      <div class="ebook-pop-up-wrapper">
        <div
          class="ebook-popup-item"
          v-for="(item, index) in fontFamilyList"
          :key="index"
          @click="fontFamilyShow(item.font)"
        >
          <div class="ebook-popup-item-text" :class="{ selected: isselected(item) }">
            {{ item.font }}
          </div>
          <div
            class="ebook-popup-item-icon"
            :class="{ selected: isselected(item) }"
            v-if="isselected(item)"
          >
            <span class="iconfont icon-dagou"></span>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import { ebookMixin } from "../../utils/mixin";
import { FONT_FAMILY } from "../../../src/utils/book";
import { setLocalStorage, getLocalStroage } from "../../utils/localStorage";
export default {
  mixins: [ebookMixin],
  data() {
    return {
      fontFamilyList: FONT_FAMILY,
    };
  },
  methods: {
    //选择字体
    fontFamilyShow(item) {
      this.setDefaultFontFamily(item); //改变字体的值
      if (item === "Default") {
        this.currentBook.rendition.themes.font("Times New Roman");
      } else {
        this.currentBook.rendition.themes.font(item); //渲染设置字体样式
      }

      this.setFontFamilyVisible(false); //当设置好字体后隐藏字体设置栏
    },
    //选择字体选中
    isselected(item) {
      return this.defaultFontFamily === item.font;
    },
    hide() {
      this.setFontFamilyVisible(false); //设置字体弹窗
    },
  },
  mounted() {
    setLocalStroage(this.fileName, this.defaultFontFamily);
  },
};
</script>
<style lang="scss" scoped>
@import "../../assets/styles/global";
.ebook-pop-list {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: white;
  z-index: 300;
  box-shadow: 0 px2rem(-4) px2rem(6) rgba(0, 0, 0, 0.1);
  .ebook-pop-list-title {
    position: relative;
    @include center;
    padding: px2rem(15);
    box-sizing: border-box;
    border-bottom: px2rem(1) solid #b8b9bb;
    .ebook-pop-title-icon {
      position: absolute;
      left: px2rem(15);
      top: 0;
      font-size: px2rem(16);
      font-weight: bold;
      height: 100%;
      @include center;
    }
    .ebook-pop-title-text {
      font-size: px2rem(14);
      font-weight: bold;
    }
  }
  .ebook-pop-up-wrapper {
    .ebook-popup-item {
      padding: px2rem(15);
      display: flex;
      justify-content: space-between;
      font-size: px2rem(14);
      .ebook-popup-item-text {
        &.selected {
          color: #346cb9;
          font-weight: bold;
        }
      }
      .ebook-popup-item-icon {
        &.selected {
          color: #346cb9;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
