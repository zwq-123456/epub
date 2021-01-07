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
      });
      this.rendition.on("touchend", (event) => {
        const offsetX = event.changedTouches[0].clientX - this.touchStartX; //离开时的偏移量
        const timeSet = event.timeStamp - this.touchStartTime; //开始到离开时的时间
        console.log(offsetX, timeSet);
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
