<template>
  <transition name="fade">
    <div v-if="loaded" v-editable="blok" class="flex flex-col-reverse md:flex-row gap-6 md:gap-2">
      <div class="md:w-1/2 flex flex-col gap-6">
        <StoryblokComponent v-for="b in blok.left" :key="b._uid" :blok="b"/>
      </div>
      <div class="md:w-1/2 flex flex-col gap-6">
        <StoryblokComponent v-for="b in blok.right" :key="b._uid" :blok="b"/>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">

import {onMounted, PropType, ref} from "vue";
import {SbBlokData} from "@storyblok/vue";

interface DoubleColumn extends SbBlokData {
  left: SbBlokData[]
  right: SbBlokData[]
}

export default {
  name: "DoubleColumn",
  props: {
    blok: {
      type: Object as PropType<DoubleColumn>,
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