<template>
  <div class="ebookload">
    <div id="read"></div>
  </div>
</template>
<script>
export default {
  mounted() {
    const baseUrl = " http://192.168.1.113:808/epub/";
    const fileName = "this.$route.params.fileName".split("|").join("/");
    console.log(`${baseUrl}${fileName}`);
  },
};
</script>
<style scoped>
@import "../../assets/styles/global.scss";
</style>
