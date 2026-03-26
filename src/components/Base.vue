<template>
  <div class="baseBeverage" :style="{ '--base-color': currentBase.color }"></div>
</template>

<script setup lang="ts">
import {currentBase} from "../stores/beverage.ts";
</script>

<style scoped>
.baseBeverage {
  position: relative;
  width: 100%;
  height: 100%;
  bottom: 0;
  animation: pour-tea 2s;
  z-index: 300;
  /*noinspection CssUnresolvedCustomProperty*/
  background-color: var(--base-color);
  /* // border-radius: 0.05em 0.05em 2.2em 2.2em; */
}
</style>
