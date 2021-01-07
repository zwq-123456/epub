<template>
  <transition name="slide-down">
    <div class="title-wrap" v-show="menuVisible">
      <div class="left">
        <span class="iconfont icon-zuojiantou" @click="back"></span>
      </div>
      <div class="right">
        <div class="icon-wrap">
          <span class="iconfont icon-gouwuchekong"></span>
        </div>
        <div class="icon-wrap">
          <span class="iconfont icon-yonghu"></span>
        </div>
        <div class="icon-wrap">
          <span class="iconfont icon-MoreVertical-1"></span>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["menuVisible"]),
  },
};
export default {
  data() {
    return {};
  },
  methods: {
    back() {
      console.log("fdsf");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/global.scss";
.title-wrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: px2rem(50);
  z-index: 101;
  display: flex;
  background-color: white;
  box-shadow: 0 px2rem(8) px2rem(8) rgba(0, 0, 0, 0.15);
  font-size: px2rem(20);
  .left {
    flex: 0 0 px2rem(60);
    @include center;
  }
  .right {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    .icon-wrap {
      flex: 0 0 px2rem(40);
      @include center;
    }
  }
  &.slide-down-enter,
  &.slide-down-leave-to {
    transform: translate3d(0, -100%, 0);
  }
  &.slide-down-enter-to,
  &.slide-down-leave {
    transform: translate3d(0, 0, 0);
  }
  &.slide-down-enter-active,
  &.slide-down-leave-active {
    transition: all 0.3s linear;
  }
}
</style>
