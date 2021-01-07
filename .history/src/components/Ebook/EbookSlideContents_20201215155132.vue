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
          :placeholder="$t('book.searchHint')"
          @click="showSearchPage()"
        />
      </div>
      <div
        class="slide-contents-search-cancel"
        v-show="searchVisible"
        @click="hideSearchPage()"
      >
        {{ $t("book.cancel") }}
      </div>
    </div>
    <!--搜索的布局-->
    <div class="slide-contents-book-wrapper">
      <div class="slide-contents-book-img-wrapper">
        <img :src="cover" class="slide-contents-book-img" />
      </div>
      <!--左侧图片的布局-->
      <div class="slide-contents-book-info-wrapper">
        <div class="slide-contents-book-title">{{ metadata.title }}</div>
        <div class="slide-contents-book-author">{{ metadata.creator }}</div>
      </div>
      <!--中间信息的布局-->
      <div class="slide-contents-book-progress-wrapper">
        <div class="slide-contents-book-progress">
          <span class="progress">{{ progress + "%" }}</span>
          <span class="progress-text">{{ $t("book.haveRead2") }}</span>
        </div>
        <div class="slide-contents-book-time">{{ gettext() }}</div>
      </div>
    </div>
    <scroll class="slide-contents-list" :top="156" :bottom="48" ref="scroll">
      <div class="slide-contents-item" v-for="(item, index) in navigation" :key="index">
        <span class="slide-contents-item-lable" :style="classItemNva(item)">{{
          item.label
        }}</span>
        <span class="slide-contents-item-page"></span>
      </div>
    </scroll>
  </div>
</template>
<script>
import { ebookMixin } from "../../utils/mixin";
import Scroll from "../common/scroll";

export default {
  mixins: [ebookMixin],
  components: {
    Scroll,
  },
  data() {
    return {
      searchVisible: false,
    };
  },
  methods: {
    //目录层级得缩进
    classItemNva(item) {
      return {
        maginLeft: `${item.level * 15} rem`,
      };
    },
    showSearchPage() {
      this.searchVisible = true;
    },
    //隐藏取消按钮
    hideSearchPage() {
      this.searchVisible = false;
    },
  },
};
</script>
<style lang="scss">
@import "../../assets/styles/global.scss";
.ebook-slide-contents {
  width: 100%;
  .slide-contents-serach-wrapper {
    width: 100%;
    height: px2rem(36);
    margin: px2rem(20) 0 px2rem(10) 0;
    padding: 0 px2rem(15);
    display: flex;
    box-sizing: border-box;
    .slide-contents-search-input-wrapper {
      flex: 1;
      @include center;
      .slide-contents-search-icon {
        flex: 0 0 px2rem(28);
        @include center;
        font-size: px2rem(12);
      }
      .slide-contents-search-input {
        flex: 1;
        width: 100%;
        height: px2rem(32);
        font-size: px2rem(14);
        background: transparent;
        border: none;
        &:focus {
          outline: none;
        }
      }
    }
    .slide-contents-search-cancel {
      flex: 0 0 px2rem(50);
      font-size: px2rem(14);
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  }
  .slide-contents-book-wrapper {
    margin-top: px2rem(10);
    font-size: 0;
    padding: px2rem(10) px2rem(15) px2rem(20) px2rem(15);
    box-sizing: border-box;
    display: flex;
    width: 100%;
    height: px2rem(90);
    .slide-contents-book-img-wrapper {
      flex: 0 0 px2rem(45);
      .slide-contents-book-img {
        width: px2rem(45);
        height: px2rem(60);
      }
    }
    .slide-contents-book-info-wrapper {
      padding: 0 px2rem(10);
      flex: 1;

      .slide-contents-book-title {
        width: px2rem(153.75); //缩列时要设定宽度
        font-size: px2rem(14);
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .slide-contents-book-author {
        font-size: px2rem(16);
      }
    }
    .slide-contents-book-progress-wrapper {
      flex: 0 0 px2rem(70);
      margin-top: px2rem(10);
      .slide-contents-book-progress {
        .progress {
          font-size: px2rem(14);
        }
        .progress-text {
          font-size: px2rem(12);
        }
      }
      .slide-contents-book-time {
        font-size: px2rem(12);
        margin-top: px2rem(7);
      }
    }
  }
  .slide-contents-list {
    padding: 0 px2rem(15);
    box-sizing: border-box;
    .slide-contents-item {
      display: flex;
      padding: px2rem(20) 0;
      box-sizing: border-box;
      .slide-contents-item-lable {
        flex: 1;
        font-size: px2rem(14);
        @include ellipsis;
      }
      .slide-contents-item-page {
      }
    }
  }
}
</style>
