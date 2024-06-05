<template>
  <div v-editable="blok" class="px-6">
    <StoryblokComponent
      v-for="b in blok.body" :key="b._uid"
      :blok="b"
    />
  </div>
</template>

<script lang="ts">
import {PropType} from "vue";
import {SbBlokData} from "@storyblok/vue";

interface SubPage extends SbBlokData {
  body: SbBlokData[]
}

export default {
  name: "SubPage",
  props: {
    blok: {
      type: Object as PropType<SubPage>,
      required: true
    }
  }
}
</script>
