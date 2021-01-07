<template>
  <transition name="slide-up">
    <div class="setting-wrapper" v-show="menuVisible && settingVisible == 0">
      <div class="setting-font-size">
        <div class="preview" :style="{ fontSize: fontSizeList[0].fontSize + 'px' }">
          A
        </div>
        <div class="select">
          <div
            class="progerss"
            v-for="(item, index) in fontSizeList"
            :key="index"
            @click="setFontSize(item.fontSize)"
          >
            <div class="line"></div>
            <div class="point-wrapper">
              <div class="point" v-show="defaultPoint === item.fontSize">
                <div class="small-point"></div>
              </div>
            </div>
            <div class="line"></div>
          </div>
        </div>
        <div
          class="preview"
          :style="{
            fontSize: fontSizeList[fontSizeList.length - 1].fontSize + 'px',
          }"
        >
          A
        </div>
      </div>
      <div class="setting-font-family" @click="showFontFamilyPopup">
        <div class="setting-font-family-text-wrapper">
          <span class="setting-font-family-text">{{ defaultFontFamily }}</span>
        </div>
        <div class="setting-font-family-wrapper">
          <span class="iconfont icon-youjiantou"></span>
        </div>
      </div>
    </div>
    <!--字号的设置-->
  </transition>
</template>
<script>
import { ebookMixin } from "../../utils/mixin";
import { FONT_SIZE_LIST } from "../../../src/utils/book";
import { saveFontSize } from "../../utils/localStorage";
export default {
  mixins: [ebookMixin],
  data() {
    return {
      fontSizeList: FONT_SIZE_LIST,
    };
  },
  methods: {
    //设置字体大小
    setFontSize(fontSize) {
      this.setDefaultPoint(fontSize); //默认
      saveFontSize(this.fileName, fontSize); //保存到离线存储
      this.currentBook.rendition.themes.fontSize(fontSize + "px"); //设置系统字体
    },
    showFontFamilyPopup() {
      this.setFontFamilyVisible(true);
    },
  },
};
</script>
e
<style lang="scss">
@import "../../assets/styles/global.scss";
.setting-wrapper {
  position: absolute;
  bottom: px2rem(48);
  width: 100%;
  z-index: 101;
  height: px2rem(90);
  left: 0;
  display: flex;
  flex-direction: column;
  box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, 0.15);
  background-color: white;
  .setting-font-size {
    display: flex;
    height: 100%;
    flex: 2;
    .preview {
      flex: 0 0 px2rem(40);

      @include center;
    }
    .select {
      display: flex;
      flex: 1;
      .progerss {
        flex: 1;
        display: flex;
        align-items: center;
        &:first-child {
          .line {
            &:first-child {
              border-top: none;
            }
          }
        }
        &:last-child {
          .line {
            &:last-child {
              border-top: none;
            }
          }
        }
        .line {
          flex: 1;
          height: 0;
          border-top: px2rem(1) solid #ccc;
        }
        .point-wrapper {
          position: relative;
          flex: 0 0 0;
          width: 0;
          height: px2rem(7);
          border-left: px2rem(1) solid #ccc;
          .point {
            position: absolute;
            width: px2rem(20);
            height: px2rem(20);
            border-radius: 50%;
            top: px2rem(-8);
            left: px2rem(-10);
            background-color: white;
            border: px2rem(1) solid #ccc;
            box-shadow: 0 px2rem(4) px2rem(4) rgba(0, 0, 0, 0.15);
            @include center;
            .small-point {
              width: px2rem(5);
              height: px2rem(5);
              border-radius: 50%;
              background-color: black;
            }
          }
        }
      }
    }
  }
  .setting-theme {
    display: flex;
    height: 100%;

    .setting-themes-item {
      flex: 1;
      display: flex;
      flex-direction: column;
      padding: 5px;

      box-sizing: border-box;
      .preview {
        flex: 1;
        border: 1px solid #ccc;
        box-sizing: border-box;
        &.no_border {
          border: none;
        }
      }
      .test {
        flex: 0 0 px2rem(30);
        font-size: px2rem(16);
        color: #ccc;
        @include center;
        &.select {
          color: #333;
        }
      }
    }
  }

  .setting-font-family {
    flex: 1;

    display: flex;
    font-size: px2rem(14);
    @include center;
    .setting-font-family-text-wrapper {
      @include center;
    }
    .setting-font-family-wrapper {
      @include center;
    }
  }
}
</style>
