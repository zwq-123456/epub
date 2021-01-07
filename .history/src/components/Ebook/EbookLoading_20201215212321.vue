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
            <div class="ebook-loading-line"></div>
            <div class="ebook-loading-mask"></div>
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
export default {
  data() {
    return {
      data: [
        [{}, {}, {}],
        [{}, {}, {}],
      ],
    };
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
  .ebook-loading-wrapper {
    .ebook-loading-item {
      .ebook-loading-line-wrapper {
        .ebook-loading-line {
        }
        .ebook-loading-mask {
        }
      }
    }
    .ebook-loading-cente {
    }
  }
}
</style>
