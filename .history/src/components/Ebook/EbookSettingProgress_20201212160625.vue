<template>
  <transition name="slide-up">
    <div class="setting-wrapper" v-show="menuVisible && settingVisible">
      <div class="setting-progress">
        <div class="progress-wrapper">
          <input
            class="progress"
            type="range"
            max="100"
            min="0"
            step="1"
            @change="onProgressChange($event.target.value)"
            @input="onProgressInput($event.target.value)"
            :value="progress"
            :disabled="!bookAvailable"
            ref="progress"
          />
        </div>
        <div class="text-wrapper">
          <span>{{ bookAvailable ? progress + "%" : "加载中..." }}</span>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import { ebookMixin } from "../../utils/mixin";
export default {
  mixins: [ebookMixin],
  methods: {
    onProgressChange(progress) {}, //进度条拖动松手后的方法
  },
  onProgressInput() {}, //拖动过程中调用的方法
};
</script>
<style lang="scss" scoped>
@import "../../assets/styles/global.scss" .setting-wrapper {
  position: absolute;
  bottom: px2rem(48);
  width: 100%;
  z-index: 101;
  height: px2rem(60);
  left: 0;
  box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, 0.15);
  background-color: white;
  .setting-progress {
    position: relative;
    width: 100%;
    height: 100%;
    .progress-wrapper {
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
