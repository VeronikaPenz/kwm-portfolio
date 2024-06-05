<template>
  <div v-editable="blok" class="home-top">
    <div class="home-top-images">
      <img v-for="image of blok.images" :key="image.id" :src="image.filename" :alt="image.alt">
    </div>
    <div class="home-top-right">
      <StoryblokComponent v-for="b in blok.right" :key="b._uid" :blok="b"/>
    </div>
  </div>
</template>

<script lang="ts">
import {Asset} from "@/shared/asset.model";
import {PropType} from "vue";
import {SbBlokData} from "@storyblok/vue";

interface HomeTop extends SbBlokData {
  images: Asset[]
  right: SbBlokData[]
}

export default {
  name: "HomeTop",
  props: {
    blok: {
      type: Object as PropType<HomeTop>,
      required: true
    }
  }
}
</script>