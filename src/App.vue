<template>
  <div class="layout-wrapper font-body text-white bg-black flex flex-col pt-8 md:pt-24 max-w-full min-h-screen">
    <Suspense>
      <template #default>
        <main class="max-w-4xl mx-auto px-4 w-full flex-1 pb-32">
          <router-view v-slot="{ Component, route }">
            <Component :is="Component" :key="route.name"/>
          </router-view>
        </main>
      </template>
      <template #fallback>
        <div class="absolute top-0 left-0 w-full h-full flex flex-col gap-2 items-center justify-center">
          <div class="h-5 w-5 bg-red animate-spin"></div>
          <span>Loading...</span>
        </div>
      </template>
    </Suspense>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import {useStoryblok} from "@storyblok/vue";
import {onMounted, provide, ref} from "vue";
import {Global} from "@/shared/global.model";
import Footer from "@/components/partials/Footer.vue";
import {mode} from "@/main";

export default {
  name: "App",
  components: {Footer},
  setup() {
    const global = ref<Global | undefined>();
    provide('global', global);
    onMounted(async () => {
      global.value = (await useStoryblok('global', {
        version: mode === 'development' ? 'draft' : 'published'
      })).value.content as any;
    })
  }
}
</script>