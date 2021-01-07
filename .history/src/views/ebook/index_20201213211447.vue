<template>
  <div class="ebook">
    <ebook-render> </ebook-render>
    <ebook-title></ebook-title>
    <ebook-menu></ebook-menu>
  </div>
</template>
<script>
import EbookMenu from "../../components/Ebook/EbookMenu.vue";
import ebookRender from "../../components/Ebook/ebookRender.vue";
import EbookTitle from "../../components/Ebook/EbookTitle.vue";
import { getReadTime, saveReadTime } from "../../utils/localStorage";
import { ebookMixin } from "../../utils/mixin";
export default {
  mixins: [ebookMixin],
  components: { ebookRender, EbookTitle, EbookMenu },
  methods: {},
  mounted() {
    this.roadSetTime();
  },
  beforeDestroy() {
    if (this.task) {
      clearInterval(this.task);
    }
  },
};
</script>
<style lang="scss"></style>
