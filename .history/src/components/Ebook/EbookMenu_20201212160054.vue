<template>
  <div>
    <transition name="slide-up">
      <div
        class="menu-wrapper"
        v-show="menuVisible"
        :class="{ 'hide-boxshadow': !menuVisible || settingVisible >= 0 }"
      >
        <div class="icon-wrap">
          <span class="iconfont icon-gongneng" @click="showsetting(3)"></span>
        </div>
        <div class="icon-wrap">
          <span class="iconfont icon-progress" @click="showsetting(2)"></span>
        </div>
        <div class="icon-wrap">
          <span class="iconfont icon-bright1" @click="showsetting(1)"></span>
        </div>
        <div class="icon-wrap">
          <span class="iconfont icon-a" @click="showsetting(0)">A</span>
        </div>
      </div>
    </transition>

    <ebook-setting-font></ebook-setting-font>
    <ebook-setting-font-popup></ebook-setting-font-popup>
    <ebook-setting-theme></ebook-setting-theme>
    <ebook-setting-progress></ebook-setting-progress>
  </div>
</template>

<script>
import { ebookMixin } from "../../utils/mixin";
import EbookSettingFont from "./EbookSettingFont.vue";
import EbookSettingFontPopup from "./EbookSettingFontPopup.vue";
import EbookSettingProgress from "./EbookSettingProgress.vue";
import EbookSettingTheme from "./EbookSettingTheme.vue";
export default {
  components: {
    EbookSettingFont,
    EbookSettingFontPopup,
    EbookSettingTheme,
    EbookSettingProgress,
  },
  mixins: [ebookMixin],
  methods: {
    showsetting(key) {
      this.setSettingVisible(key); //显示菜单栏的哪个组件
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../assets/styles/global.scss";
.menu-wrapper {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: px2rem(48);
  z-index: 101;
  display: flex;
  background-color: white;
  box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, 0.15);
  font-size: px2rem(20);
  .icon-wrap {
    flex: 1;
    @include center;
  }
  &.hide-boxshadow {
    box-shadow: none;
  }
}
</style>
