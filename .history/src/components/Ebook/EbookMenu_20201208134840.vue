<template>
  <transition name="slide-up">
    <div
      class="menu-wrap"
      v-show="menuShowToggle"
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
export default {};
</script>
<
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
  .icon-wrap {
    flex: 1;
    @include center;
  }
  &.hide-boxshadow {
    box-shadow: none;
  }
}
</style>
