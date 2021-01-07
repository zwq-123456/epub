<template>
  <transition name="slide-up">
    <div class="fontSizeBar" v-show="menuVisible && settingVisible == 0">
      <div class="setting-font-size">
        <div class="preview" :style="{ fontSize: fontSizeList[0].fontSize + 'px' }">
          A
        </div>
        <div class="slect">
          <div
            class="progerss"
            v-for="(item, index) in fontSizeList"
            :key="index"
            @click="setFontSize(item.fontSize)"
          >
            <div class="line"></div>
            <div class="wrap_point">
              <div class="point" v-show="defaultPoint === item.fontSize">
                <div class="small_point"></div>
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
    </div>
    <!--字号的设置-->
  </transition>
</template>
<script>
import { ebookMixin } from "../../utils/mixin";
import { FONT_SIZE_LIST } from "../../../src/utils/book";
export default {
  mixins: [ebookMixin],
  data() {
    return {
      fontSizeList: FONT_SIZE_LIST,
      defaultPoint: 16,
    };
  },
  methods: {
    setFontSize(fontSize) {
      this.defaultPoint = fontSize;
    },
  },
};
</script>
<style lang="scss">
@import "../../assets/styles/global.scss";
.fontSizeBar {
  position: absolute;
  bottom: px2rem(48);
  width: 100%;
  z-index: 101;
  height: px2rem(60);
  left: 0;
  box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, 0.15);
  background-color: white;
  .setting-font-size {
    display: flex;
    height: 100%;
    .preview {
      flex: 0 0 px2rem(40);

      @include center;
    }
    .slect {
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
        .wrap_point {
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
            .small_point {
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
  .setting_theme {
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
  .setting_progress {
    position: relative;
    width: 100%;
    height: 100%;
    .progress_wrap {
      width: 100%;
      height: 100%;
      @include center;
      padding: 0 px2rem(30);
      box-sizing: border-box;
    }
    .progress {
      width: 100%;
      -webkit-appearance: none;
      height: px2rem(2);
      background: -webkit-linear-gradient(#999, #999) no-repeat, #ddd;
      background-size: 0 100%;
      &:focus {
        outline: none;
      }
      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: px2rem(20);
        width: px2rem(20);
        border-radius: 50%;
        background-color: white;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
        border: px2rem(1) solid #ddd;
      }
    }
    .text-wrapper {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      color: #333;
      font-size: px2rem(12);
      text-align: center;
    }
  }
}
</style>
