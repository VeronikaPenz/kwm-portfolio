import '@/styles/output.css';

import {createApp} from 'vue';
import {StoryblokVue, apiPlugin} from '@storyblok/vue';
import App from "@/App.vue";
import router from "@/router";
import token from "@/storyblok-token.json"

export const mode = import.meta.env.MODE

const app = createApp(App);
app
  .use(router)
  .use(StoryblokVue, {
    accessToken: token.token,
    use: [apiPlugin]
  });

const modules = import.meta.glob('./components/**/*.vue');
for (const path in modules) {
  modules[path]().then((mod: any) => {
    const componentName = path
      .replace('./components/', '')
      .replace(/\.\w+$/, '')
      .split(/[-/]/)
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      .join('');
    app.component(componentName, mod.default);
  });
}

app.mount('#app')
