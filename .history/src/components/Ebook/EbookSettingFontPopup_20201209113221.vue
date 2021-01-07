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
    return {
      hide() {},
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../../assets/styles/global";
.ebook-pop-list {
  .ebook-pop-list-title {
    .ebook-pop-title-icon {
    }
    .ebook-pop-title-text {
    }
  }
  .ebook-pop-up-wrapper {
  }
}
</style>
