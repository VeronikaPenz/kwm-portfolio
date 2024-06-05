<template>
  <transition name="fade">
    <div v-if="loaded" v-editable="blok" class="item-list flex flex-col items-center gap-6">
      <h3 v-if="blok.h3" class="font-headline text-1xl md:text-2xl">{{ blok.h3 }}</h3>
      <div class="item-list-items flex flex-wrap gap-10">
        <StoryblokComponent v-for="b in blok.items" :key="b._uid" :blok="b"/>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import {onMounted, PropType, ref} from "vue";
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
  },
  setup() {
    const loaded = ref(false);

    onMounted(() => {
      loaded.value = true;
    });

    return {
      loaded
    }
  }
}
</script>