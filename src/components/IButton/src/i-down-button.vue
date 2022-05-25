<template>
  <img
    class="rightan"
    :src="Down"
    :width="props.width"
    :height="props.height"
  />
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { Down } from "@/config";

const props = defineProps<{ width: string; height: string }>();
</script>

<style scoped>
@-webkit-keyframes rightan {
  from {
    bottom: 0%;
    opacity: 0;
  }
  to {
    bottom: 5%;
    opacity: 1;
  }
}
.rightan {
  -webkit-animation: rightan 2s infinite;
  -webkit-animation-fill-mode: both;
}
</style>
