<template>
  <div class="ebook">
    <ebook-render> </ebook-render>
    <ebook-title></ebook-title>
  </div>
</template>
<script>
import ebookRender from "../../components/Ebook/ebookRender.vue";
import EbookTitle from "../../components/Ebook/EbookTitle.vue";
export default {
  components: { ebookRender, EbookTitle },
};
</script>
<style lang="scss"></style>
