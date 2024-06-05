<template>
  <div v-editable="blok" class="home-page">
    <StoryblokComponent
      v-for="b in blok.body" :key="b._uid"
      :blok="b"
    />
  </div>
</template>

<script lang="ts">
import {PropType} from "vue";
import {SbBlokData} from "@storyblok/vue";

interface HomePage extends SbBlokData {
  body: SbBlokData[]
}

export default {
  name: "HomePage",
  props: {
    blok: {
      type: Object as PropType<HomePage>,
      required: true
    }
  }
}
</script>
