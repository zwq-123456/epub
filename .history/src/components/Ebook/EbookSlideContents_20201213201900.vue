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
        {{ "$t('book.cancel')" }}
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss"></style>
