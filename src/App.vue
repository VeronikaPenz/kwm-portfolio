<template>
  <Suspense>
    <template #default>
      <Slug/>
    </template>

    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>

<script lang="ts">
import Slug from "@/pages/Slug.vue";
import {SbBlokData, useStoryblok} from "@storyblok/vue";
import {onMounted, provide, ref} from "vue";

interface Global extends SbBlokData {
  backLabel: string
  contactHeading: string
  copyright: string
  email: string
}

export default {
  name: "App",
  components: {Slug},
  setup() {
    const global = ref<Global | undefined>();
    provide('global', global);
    onMounted(async () => {
      global.value = (await useStoryblok('global', {version: 'draft'})).value.content;
    })
  }
}
</script>