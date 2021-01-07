<template>
  <transition name="slide-up">
    <div class="setting_theme">
      <div
        class="setting-themes-item"
        v-for="(item, index) in themesList"
        :key="index"
        @click="setThemes(index)"
      >
        <div
          class="preview"
          :class="{ no_border: item.style.body.background != '#fff' }"
          :style="{ backgroundColor: item.style.body.background }"
        ></div>
        <div class="test" :class="{ select: index == defaultThemes }">
          {{ item.name }}
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import "../../assets/styles/global";
</style>
