// src/boot/lottie.js
import { Vue3Lottie } from 'vue3-lottie';
import { boot } from 'quasar/wrappers';

export default boot(({ app }) => {
  app.component('Vue3Lottie', Vue3Lottie);
});