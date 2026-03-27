import { defineStore } from "pinia";
import tempretures from "../data/tempretures.json";
import bases from "../data/bases.json";
import creamers from "../data/creamers.json";
import syrups from "../data/syrups.json";

export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: tempretures,
    bases,
    creamers,
    syrups,
    currentTemp: tempretures[0],
    currentCreamer: creamers[0],
    currentBase: bases[0],
    currentSyrup: syrups[0],

    savedBeverages: [] as any[],
    selectedPresetName: "",
  }),

  actions: {
    makeBeverage(name: string) {
      const trimmedName = name.trim();
      if (!trimmedName) return;

      const beverage = {
        id: Date.now(),
        name: trimmedName,
        temp: this.currentTemp,
        base: this.currentBase,
        creamer: this.currentCreamer,
        syrup: this.currentSyrup,
      };

      // @ts-ignore
      this.savedBeverages.push(beverage);
      this.selectedPresetName = beverage.name;
    },

    showBeverage(name: string) {
      const beverage = this.savedBeverages.find(
          (item) => item.name === name
      );

      if (!beverage) return;

      this.currentTemp = beverage.temp;
      this.currentBase = beverage.base;
      this.currentCreamer = beverage.creamer;
      this.currentSyrup = beverage.syrup;
      this.selectedPresetName = beverage.name;
    },
  },

  persist: true,
});