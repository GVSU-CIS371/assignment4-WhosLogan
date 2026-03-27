import { defineStore } from "pinia";
import tempretures from "../data/tempretures.json";
import bases from "../data/bases.json";
import creamers from "../data/creamers.json";
import syrups from "../data/syrups.json";

export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: tempretures,
    bases: bases,
    creamers: creamers,
    syrups: syrups,
    currentTemp: tempretures[0],
    currentCreamer: creamers[0],
    currentBase: bases[0],
    currentSyrup: syrups[0]
  }),

  actions: {
    makeBeverage() {

    },
    showBeverage() {

    },
  },
  persist: true,
});
