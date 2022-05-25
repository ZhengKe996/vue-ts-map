<template>
  <div class="box">
    <img class="logo" :src="LoGo" alt="" />

    <div class="title" :data-attr="Title">{{ Title }}</div>

    <div class="buttons">
      <KOrangeutton @click="go()" :text="'出发'" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { LoGo, Title } from "@/config";
import { KOrangeutton } from "@/components/KButton";
const router = useRouter();

const go = () => {
  setTimeout(() => {
    router.push("/game");
  }, 1000);
};
</script>

<style scoped lang="less">
.box {
  width: 100vw;
  height: 100vh;
  background-image: url("@/assets/images/main.jpg");
  background-repeat: no-repeat;
  background-size: 100vw 100vh;
  overflow: hidden;

  .logo {
    width: 10rem;
    height: 3rem;
    padding: 1rem;
    position: fixed;
    top: 0;
    right: 0;
  }

  .title {
    text-align: center;
    font: bold 3em Consolas, Monaco, monospace;
    border-right: 0.1em solid;
    width: 75vw;
    margin: 2em 1em;
    white-space: nowrap;
    overflow: hidden;
    animation: typing 3s steps(26, end),
      cursor-blink 0.3s step-end infinite alternate;
  }
  @keyframes typing {
    from {
      width: 0;
    }
  }

  @keyframes cursor-blink {
    50% {
      border-color: transparent;
    }
  }

  .buttons {
    margin: 15rem auto 0;
  }
}
</style>
