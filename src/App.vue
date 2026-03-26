<template>
  <div>
    <Beverage :isIced="currentTemp === 'Cold'" />
    <ul>
      <li>
        <template v-for="temp in temps" :key="temp">
          <label>
            <input
                type="radio"
                name="temperature"
                :id="`r${temp}`"
                :value="temp"
                v-model="currentTemp"
            />
            {{ temp }}
          </label>
        </template>
      </li>

      <li>
        <template v-for="base in bases" :key="base">
          <label>
            <input
                type="radio"
                name="base"
                :id="`r${base.id}`"
                :value="base"
                v-model="currentBase"
            />
            {{ base.name }}
          </label>
        </template>
      </li>

      <li>
        <template v-for="creamer in creamers" :key="creamer.id">
          <label>
            <input
                type="radio"
                name="creamer"
                :id="`r${creamer.id}`"
                :value="creamer"
                v-model="currentCreamer"
            />
            {{ creamer.name }}
          </label>
        </template>
      </li>

      <li>
        <template v-for="syrup in syrups" :key="syrups.id">
          <label>
            <input
                type="radio"
                name="syrup"
                :id="`r${syrup.id}`"
                :value="syrup"
                v-model="currentSyrup"
            />
            {{ syrup.name }}
          </label>
        </template>
      </li>
    </ul>
    <input type="text" placeholder="Beverage Name" />
    <button>🍺 Make Beverage</button>
  </div>
  <div id="beverage-container" style="margin-top: 20px"></div>
</template>

<script setup lang="ts">
import Beverage from "./components/Beverage.vue";
</script>

<style lang="scss">
body,
html {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #6e4228;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
}
ul {
  list-style: none;
}
</style>
