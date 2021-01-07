<template>
  <div id="app">
    <span class="test">sdfdsfff</span>
    <router-view />
  </div>
</template>
<script>
document.addEventListener("DOMContentLoad", () => {
  const html = document.querySelector("html");
  let fontSize = window.innerWidth / 10;
  fontSize = fontSize > 50 ? 50 : fontSize;
  html.style.fontSize = fontSize + "px";
});
export default {};
</script>
<style scoped>
.test {
  font-family: "Days One";
  font-size: 20px;
}
</style>
