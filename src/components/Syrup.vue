<template>
  <div class="syrup" :style="{ '--base-color': currentSyrup.color }"></div>
</template>

<script setup lang="ts">
import {currentSyrup} from "../stores/beverage.ts";
</script>
<style lang="scss" scoped>
.syrup {
  transform: translateY(400%);
  background-color: var(--base-color);
  position: relative;
  width: 100%;
  height: 20%;
  animation: pour-tea 2s 1s forwards;
  z-index: 2;
}
</style>
