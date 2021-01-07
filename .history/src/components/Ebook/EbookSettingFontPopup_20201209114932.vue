<template>
  <div class="ebook-pop-list" v-show="fontFamilyVisible">
    <div class="ebook-pop-list-title">
      <div class="ebook-pop-title-icon" @click="hide">
        <span class="iconfont icon-jiantou9"></span>
      </div>
      <span class="ebook-pop-title-text">选择字体</span>
    </div>
    <div class="ebook-pop-up-wrapper"></div>
  </div>
</template>
<script>
import { ebookMixin } from "../../utils/mixin";
export default {
  mixins: [ebookMixin],
  data() {
    return {};
  },
  methods: {
    hide() {
      this.setFontFamilyVisible(false);
    },
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
    @include center;

    position: relative;
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
  }
}
</style>
