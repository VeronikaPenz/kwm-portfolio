<template>
  <transition name="slide-left">
    <div v-if="loaded" v-editable="blok" class="item-list bg-darker py-12 flex flex-col items-center gap-6 relative mx-[-2em] md:mx-0 px-[2em] md:px-0  ">
      <h3 v-if="blok.h3" class="font-headline text-2xl relative">{{ blok.h3 }}</h3>
      <div class="item-list-items flex flex-wrap justify-center gap-8 md:gap-10 relative">
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