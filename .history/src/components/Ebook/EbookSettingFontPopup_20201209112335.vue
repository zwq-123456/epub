<template>
  <div class="ebook-pop-list" v-show="fontFamilyVisible">
    <div class="ebook-pop-list-title">bf</div>
    <div class="ebook-pop-up-wrapper"></div>
  </div>
</template>
<script>
import { ebookMixin } from "../../utils/mixin";
export default {
  mixins: [ebookMixin],
};
</script>
<style lang="scss" scoped>
@import "../../assets/styles/global";
</style>
