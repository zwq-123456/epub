<template>
  <div id="app">
    <span class="test">sdfdsfff</span>
    <router-view />
  </div>
</template>
<script>
document.addEventListener("DOMContentLoaded", () => {
  const html = document.querySelector("html");
  let fontSize = window.innerWidth / 10;
  fontSize = fontSize > 50 ? 50 : fontSize;
  html.style.fontSize = fontSize + "px";
});
export default {
  mounted() {
    this.$store.dispatch("set", 10).then(function () {
      console.log(this.$store.book.test);
    });
  },
};
</script>
<style lang="scss" scoped>
@import "./assets/styles/global";
.test {
  font-family: "Days One";
  font-size: px2rem(30);
}
</style>
