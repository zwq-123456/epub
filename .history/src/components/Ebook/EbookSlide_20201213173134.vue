<template>
  <transition name="fade">
    <div class="slide-content-wrapper" v-show="menuVisible && settingVisible == 3">
      <div class="content">
        <div class="content-page-wrapper">
          <div class="content-page"></div>
          <div class="content-tab"></div>
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
      .content-page {
      }
      .content-tab {
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
