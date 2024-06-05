<template>
  <div v-editable="blok" class="item-list">
    <h3 v-if="blok.h3" class="font-headline">{{ blok.h3 }}</h3>
    <div class="item-list-items">
      <StoryblokComponent v-for="b in blok.items" :key="b._uid" :blok="b"/>
    </div>
  </div>
</template>

<script lang="ts">
import {PropType} from "vue";
import {SbBlokData} from "@storyblok/vue";

interface ItemList extends SbBlokData {
  h3?: string
  items: SbBlokData[]
}

export default {
  name: "ItemList",
  props: {
    blok: {
      type: Object as PropType<ItemList>,
      required: true
    }
  }
}
</script>