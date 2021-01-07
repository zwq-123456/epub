<template>
  <div>
    <transition name="slide-up">
      <div
        class="menu-wrap"
        v-show="menuVisible"
        :class="{ 'hide-boxshadow': menuVisible || settingVisible >= 0 }"
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
  </div>
</template>

<script>
import { ebookMixin } from "../../utils/mixin";
import EbookSettingFont from "./EbookSettingFont.vue";
export default {
  components: { EbookSettingFont },
  mixins: [ebookMixin],
  methods: {
    showsetting(key) {
      this.setSettingVisible(key);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../assets/styles/global.scss";
.menu-wrap {
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
