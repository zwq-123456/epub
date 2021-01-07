<template>
  <div class="ebook-slide-contents">
    <div class="slide-contents-serach-wrapper">
      <div class="slide-contents-search-input-wrapper">
        <div class="slide-contents-search-icon">
          <span class="iconfont icon-search"></span>
        </div>
        <input
          type="text"
          class="slide-contents-search-input"
          :placeholder="$t('book.searchHit')"
        />
      </div>
      <div class="slide-contents-search-cancel">
        {{ $t("book.cancel") }}
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
@import "../../assets/styles/global.scss";
.ebook-slide-contents {
  width: 100%;
  .slide-contents-serach-wrapper {
    width: 100%;
    height: px2rem(48);
    margin: px2rem(20) 0 px2rem(10) 0;
    padding: 0 px2rem(15);
    display: flex;
    .slide-contents-search-input-wrapper {
      flex: 1;
      .slide-contents-search-icon {
      }
      .slide-contents-search-input {
      }
    }
    .slide-contents-search-cancel {
      flex: 0 0 px2rem(50);
      font-size: px2rem(14);
      justify-content: right;
      align-items: center;
    }
  }
}
</style>
