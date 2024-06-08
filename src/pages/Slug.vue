<template>
  <StoryblokComponent v-if="story?.content" :blok="story.content"/>
</template>

<script lang="ts">
import {useRoute} from "vue-router";
import {useStoryblok} from '@storyblok/vue';
import {ref, watch} from "vue";
import {mode} from "@/main";

export default {
  name: "Slug",
  setup() {
    const route = useRoute();
    const story = ref<any>(null);

    const updateStory = async () => {
      let path = route.path.substring(1);
      path = path === '' ? 'home' : path;
      story.value = (await useStoryblok(path, {
        version: mode === 'development' ? 'draft' : 'published',
        resolve_links: "url",
      })).value;
    }

    watch(() => route.path, updateStory);
    updateStory();

    return {
      story
    }
  }
}
</script>
