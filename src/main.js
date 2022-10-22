import Vue from "vue";
import App from "./App.vue";

export const eBus = new Vue({
  methods: {
    inputValue(item) {
      this.$emit("inputPro", item);
    },
  },
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
