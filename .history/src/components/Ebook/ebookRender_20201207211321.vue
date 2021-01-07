<template>
  <div class="ebookload">
    <div id="read"></div>
  </div>
</template>
<script>
import Epub from "epubjs";
global.epub = Epub;
export default {
  methods: {
    initEpub() {
      const baseUrl =
        " http://192.168.1.113:808/epub/" + this.$store.state.book.fileName + "epub";
    },
  },
  mounted() {
    const fileName = this.$route.params.fileName.split("|").join("/");
    this.$store.dispatch("setFileName", fileName).then(() => {
      this.initEpub();
    });
    console.log(this.initEpub());
  },
};
</script>
<style scoped>
@import "../../assets/styles/global.scss";
</style>
