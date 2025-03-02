import { defineNuxtPlugin } from '#app';
import * as LucideIcons from 'lucide-vue-next';

export default defineNuxtPlugin((nuxtApp) => {
  for (const [name, icon] of Object.entries(LucideIcons)) {
    nuxtApp.vueApp.component(name, icon);
  }
});