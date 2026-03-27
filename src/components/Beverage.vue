<template>
  <Mug>
    <Cold v-if="isIced" />
    <Hot v-else />
    <Contents>
      <template v-if="store.currentCreamer.id !== 'c1'" v-slot:top>
        <Creamer />
      </template>
      <template v-if="store.currentSyrup.id !== 's1'" v-slot:mid>
        <Syrup />
      </template>
      <template v-slot:bottom>
        <Base />
      </template>
    </Contents>
  </Mug>
</template>
<script setup lang="ts">
import Contents from "./Contents.vue";
import Mug from "./Mug.vue";
import Syrup from "./Syrup.vue";
import Base from "./Base.vue";
import Creamer from "./Creamer.vue";
import Hot from "./Hot.vue";
import Cold from "./Cold.vue";
import {useBeverageStore} from "../stores/beverageStore.ts";

const store = useBeverageStore();

type Props = {
  isIced: boolean;
};
defineProps<Props>();
</script>
