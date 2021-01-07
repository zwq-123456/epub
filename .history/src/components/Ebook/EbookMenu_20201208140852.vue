<template>
  <transition name="slide-up">
    <div
      class="menu-wrap"
      v-show="menuVisible"
      :class="{ 'hide-boxshadow': settingFontSize || !menuShowToggle }"
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
</template>
<script>
import { ebookMixin } from "../../utils/mixin";
export default {
  mixins: [ebookMixin],
  computed: {
    ...mapGetters(["menuVisible"]),
  },
  methods: {
    showsetting(key) {},
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
  &.slide-up-enter,
  &.slide-up-leave-to {
    transform: translate3d(0, 100%, 0);
  }
  &.slide-up-enter-to,
  &.slide-up-leave {
    transform: translate3d(0, 0, 0);
  }
  &.slide-up-enter-active,
  &.slide-up-leave-active {
    transition: all 0.3s linear;
  }
}
</style>
