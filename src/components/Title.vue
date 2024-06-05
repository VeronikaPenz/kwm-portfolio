<template>
  <div v-editable="blok" class="title">
    <h1 class="font-headline text-6xl md:text-8xl">{{ blok.h1 }}</h1>
    <h2 class="text-2xl md:text-4xl" v-if="blok.h2">{{ blok.h2 }}</h2>
  </div>
</template>

<script lang="ts">
import {PropType} from "vue";
import {SbBlokData} from "@storyblok/vue";

interface Title extends SbBlokData {
  h1: string
  h2?: string
}

export default {
  name: "Title",
  props: {
    blok: {
      type: Object as PropType<Title>,
      required: true
    }
  }
}
</script>