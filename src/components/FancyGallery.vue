<template>
  <div v-editable="blok"></div>
</template>

<script lang="ts">
import {Asset} from "@/shared/asset.model";
import {PropType} from "vue";
import {SbBlokData} from "@storyblok/vue";

interface FancyGallery extends SbBlokData {
  items: Asset[]
}

export default {
  name: "FancyGallery",
  props: {
    blok: {
      type: Object as PropType<FancyGallery>,
      required: true
    }
  }
}
</script>