<template>
  <transition name="slide-right">
    <div v-if=loaded v-editable="blok" class="title relative" :class="{'head-backdrop':blok.backdrop}">
      <h1 class="font-headline text-6xl md:text-8xl relative">{{ blok.h1 }}</h1>
      <span class="my-5 h-[6px] w-1/2 block bg-red relative"></span>
      <h2 class="text-2xl md:text-4xl pl-1 relative" v-if="blok.h2">{{ blok.h2 }}</h2>
    </div>
  </transition>
</template>

<script lang="ts">
import {onMounted, PropType, ref} from "vue";
import {SbBlokData} from "@storyblok/vue";

interface Title extends SbBlokData {
  h1: string
  h2?: string
  backdrop: boolean
}

export default {
  name: "Title",
  props: {
    blok: {
      type: Object as PropType<Title>,
      required: true
    }
  },
  setup(props: any) {
    const loaded = ref(props.parent);

    onMounted(() => {
      loaded.value = true;
    });

    return {
      loaded
    }
  }
}
</script>

<style lang="scss" scoped>
.head-backdrop:before {
  content: "";
  position: absolute;
  bottom: -2em;
  top: -2em;
  left: -1em;
  width: 100vw;
  background: #0b0b0b;
  @media screen and (min-width: 800px) {
    clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%);
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>