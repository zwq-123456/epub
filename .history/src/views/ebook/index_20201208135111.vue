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
export default {
  components: { ebookRender, EbookTitle, EbookMenu },
};
</script>
<style lang="scss"></style>
