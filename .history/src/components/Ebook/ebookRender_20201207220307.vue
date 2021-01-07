<template>
  <div class="ebookload">
    <div id="read"></div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Epub from "epubjs";
global.epub = Epub;
export default {
  computed: {
    ...mapGetters(["fileName"]),
  },
  methods: {
    initEpub() {
      const baseUrl = " http://192.168.1.113:808/epub/" + this.fileName + ".epub";
      this.book = new Epub(baseUrl);
      this.rendition = this.book.renderTo("read", {
        width: window.innerWidth,
        height: window.innerHeight,
        methods: "default",
      });
      this.rendition.display();
      this.rendition.on("touchstart", (event) => {
        this.touchStartX = event.changedTouches[0].clientX;
        this.touchStartTime = event.timeStamp;
        console.log(event);
      });
      this.rendition.on("touchend", (event) => {
        console.log(event);
      });
      console.log(baseUrl);
    },
  },
  mounted() {
    const fileName = this.$route.params.fileName.split("|").join("/");
    this.$store.dispatch("setFileName", fileName).then(() => {
      this.initEpub();
    });
  },
};
</script>
<style scoped>
@import "../../assets/styles/global.scss";
</style>
