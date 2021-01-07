<template>
  <transition name="fade-slide-right">
    <div class="slide-content-wrapper" v-show="menuVisible && settingVisible == 3">
      <div class="content">
        <div class="content-page-wrapper">
          <div class="content-page"></div>
          <div class="content-tab">
            <div class="content-page-tab-item">{{ $t("book.navigation") }}</div>
            <div class="content-page-tab-item">{{ $t("book.bookmark") }}</div>
          </div>
        </div>
      </div>
      <div class="content-bg" @click="hideTitleAndMenu()"></div>
    </div>
  </transition>
</template>
<script>
import { ebookMixin } from "../../utils/mixin";
export default {
  mixins: [ebookMixin],
  methods: {},
};
</script>
<style lang="scss" scoped>
@import "../../assets/styles/global.scss";
.slide-content-wrapper {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 300;
  display: flex;
  width: 100%;
  height: 100%;
  .content {
    flex: 0 0 85%;
    width: 85%;
    height: 100%;
    .content-page-wrapper {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      .content-page {
        flex: 1;
        width: 100%;
        overflow: hidden;
      }
      .content-tab {
        flex: 0 0 px2rem(48);
        width: 100%;
        height: px2rem(48);
        border-top: 1px solid #9c9c9c;
        display: flex;
        .content-page-tab-item {
          flex: 1;
          @include center;
          font-size: px2rem(14);
        }
      }
    }
  }
  .content-bg {
    flex: 0 0 15%;
    width: 15%;
    height: 100%;
  }
}
</style>
