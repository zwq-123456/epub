<template>
  <div class="ebookload">
    <div id="read"></div>
  </div>
</template>
<script>
export default {
  mounted() {
    const baseUrl = " http://192.168.1.113:808/epub/";
    const fileName = this.$route.params.filename.split("|").join("/");
    console.log(`${baseUrl}${fileName}.epub`);
  },
};
</script>
<style scoped>
@import "../../assets/styles/global.scss";
</style>
