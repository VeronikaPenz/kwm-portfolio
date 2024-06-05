<template>
  <div v-editable="blok" class="technology-list">
    <div v-for="image of blok.items" :key="image.id" class="technology-list-item">
      <img :src="image.filename" :alt="image.alt">
    </div>
  </div>
</template>

<script lang="ts">
import {Asset} from "@/shared/asset.model";
import {PropType} from "vue";
import {SbBlokData} from "@storyblok/vue";

interface TechnologyList extends SbBlokData {
  items: Asset[]
}

export default {
  name: "TechnologyList",
  props: {
    blok: {
      type: Object as PropType<TechnologyList>,
      required: true
    }
  }
}
</script>