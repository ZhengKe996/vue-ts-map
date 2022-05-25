<template>
  <div class="box" ref="menu">
    <Transition name="bounce">
      <img class="img" :src="images[count]" alt="" />
    </Transition>

    <div class="add-box">
      <IDownButton class="add" :width="'100'" :height="'100'" @click="add" />
    </div>
  </div>

  <van-popup v-model:show="show" position="top" :style="{ height: '60%' }">
    <van-row justify="space-around">
      <van-col span="18" class="cont-box">
        <div class="content">
          {{ MapList[count] }}
        </div>
        <img :src="TImg[count]" class="t-img" />
        <div class="m-title">
          {{ TText[count] }}
        </div>
      </van-col>
    </van-row>
  </van-popup>
</template>

<script setup lang="ts">
import { ref } from "vue";

import { IDownButton } from "@/components/IButton";
import { images, MapList, TImg, TText } from "@/config";
const show = ref(false);
const showPopup = () => {
  show.value = true;
};
const menu = ref();
const count = ref(0);
const add = () => {
  count.value++;
  if (count.value >= images.length) {
    count.value = 0;

    return;
  }
  showPopup();
};
</script>

<style scoped lang="less">
.bounce-enter-active {
  animation: bounce-in 1.5s;
}
.bounce-leave-active {
  animation: bounce-in 1.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

.cont-box {
  font-size: 1.2rem;
  text-indent: 2em;
  text-align: left;
  color: #666;
  line-height: 1.5em;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  margin: 1rem;
  .t-img {
    margin: 1rem;
    width: 100%;
  }
  .m-title {
    text-align: center;
    font-size: 1rem;
  }
}

.add-box {
  width: 100vw;
  position: fixed;
  bottom: 0;
  z-index: 999;
}
.add {
  width: 100%;
  margin: 1rem auto;
}
.box {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 1;
}
.img {
  width: 100vw;
  height: 100vh;
  display: block;
  margin: 0;
  padding: 0;
  border: 0;
}
</style>
