<template>
  <div v-editable="blok" class="technology-list flex flex-wrap gap-6">
    <div v-for="image of blok.items" :key="image.id"
         class="technology-list-item bg-white w-20 md:w-24 h-20 md:h-24 p-5 rounded-full flex items-center justify-center">
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