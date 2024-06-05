<template>
  <StoryblokComponent v-if="story" :blok="story.content"/>
</template>

<script lang="ts">
import {useRoute} from "vue-router";
import {useStoryblok} from '@storyblok/vue';

export default {
  name: "Slug",
  async setup() {
    let path = useRoute().path.substring(1);
    path = path === '' ? 'home' : path;

    const story = await useStoryblok(path, {
      version: "draft",
      resolve_links: "url",
    });
    return {
      story
    }
  }
}
</script>
