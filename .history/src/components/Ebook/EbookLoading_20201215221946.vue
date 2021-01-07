<template>
  <div>
    <div class="ebook-loading">
      <div class="ebook-loading-wrapper">
        <div class="ebook-loading-item" v-for="(item, index) in data" :key="index">
          <div
            class="ebook-loading-line-wrapper"
            v-for="(subItem, subIndex) in item"
            :key="subIndex"
          >
            <div class="ebook-loading-line" ref="line"></div>
            <div class="ebook-loading-mask" ref="mask"></div>
          </div>
        </div>
        <!-- 左右得线条 -->
        <div class="ebook-loading-center"></div>
        <!-- 中间的线条 -->
      </div>
    </div>
  </div>
</template>
<script>
import { px2rem } from "../../utils/utiles";
export default {
  data() {
    return {
      data: [
        [{}, {}, {}],
        [{}, {}, {}],
      ],
      maskWidth: [
        { value: 0 },
        { value: 0 },
        { value: 0 },
        { value: 0 },
        { value: 0 },
        { value: 0 },
      ],
      lineWidth: [
        { value: 1 },
        { value: 1 },
        { value: 1 },
        { value: 1 },
        { value: 1 },
        { value: 1 },
      ],
      add: true,
      end: false,
    };
  },
  mounted() {
    this.task = setInterval(() => {
      this.$refs.mask.forEach((item, index) => {
        const mask = this.$refs.mask[index];
        const line = this.$refs.line[index];
        let maskWidth = this.maskWidth[index];
        let lineWidth = this.lineWidth[index];
        maskWidth.value++;
        lineWidth.value--;
        mask.style.width = `${px2rem(maskWidth.value)}rem`;
        line.style.width = `${px2rem(lineWidth.value)}rem`;
      });
    }, 500);
  },
};
</script>
<style lang="scss" scoped>
@import "../../assets/styles/global.scss";
.ebook-loading {
  position: relative;
  z-index: 400;
  width: px2rem(63);
  height: px2rem(40);
  border: px2rem(1.5) solid #d7d7d7;
  border-radius: px2rem(3);
  background: transparent;
  .ebook-loading-wrapper {
    display: flex;
    width: 100%;
    height: 100%;
    .ebook-loading-item {
      flex: 1;
      padding: px2rem(7) 0;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      .ebook-loading-line-wrapper {
        padding: 0 px2rem(7);
        box-sizing: border-box;
        flex: 1;
        @include left;
        .ebook-loading-line {
          //   flex: 0 0 px2rem(16);
          width: px2rem(16);
          height: px2rem(2);
          background: #d7d7d7;
        }
        .ebook-loading-mask {
          //   flex: 0 0 0;
          width: px2rem(0);
          height: px2rem(0);
        }
      }
    }
    .ebook-loading-center {
      position: absolute;
      left: 50%;
      width: px2rem(1.5);
      height: 100%;
      background: #d7d7d7;
      top: 0;
    }
  }
}
</style>
