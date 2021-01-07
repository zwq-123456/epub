<template>
  <transition name="slide-up">
    <div class="setting_theme" v-show="menuVisible && setSettingVisible === 1">
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
        <div class="test" :class="{ select: index == defaultTheme }">
          {{ item.name }}
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import { ebookMixin } from "../../utils/mixin";
import { themesList } from "../../utils/book";
export default {
  mixins: [ebookMixin],
  data() {
    return {
      themesList: themesList,
    };
  },
  methods: {
    setThemes(index) {},
  },
};
</script>
<style lang="scss" scoped>
@import "../../assets/styles/global";
.setting_theme {
  display: flex;
  height: 100%;
  .setting-themes-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 5px;
    box-sizing: border-box;
    .preview {
      flex: 1;
      border: 1px solid #ccc;
      box-sizing: border-box;
      &.no_border {
        border: none;
      }
    }
    .test {
      flex: 0 0 px2rem(30);
      font-size: px2rem(16);
      color: #ccc;
      @include center;
      &.select {
        color: #333;
      }
    }
  }
}
</style>
