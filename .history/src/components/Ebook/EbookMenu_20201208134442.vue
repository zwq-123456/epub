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
<style lang="scss" scoped></style>
