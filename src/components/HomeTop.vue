<template>
  <div v-editable="blok" class="home-top flex flex-col md:flex-row relative">
    <transition name="slide-left">
      <div v-if="loaded" class="home-top-images translate-x-[2em] relative">
        <img v-for="image of blok.images" :key="image.id" :src="image.filename" :alt="image.alt">
      </div>
    </transition>
    <transition name="slide-right">
      <div v-if="loaded" class="home-top-right md:translate-x-[-2em] absolute md:static max-w-48 md:max-w-none">
        <StoryblokComponent v-for="b in blok.right" :key="b._uid" :blok="b"/>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import {Asset} from "@/shared/asset.model";
import {onMounted, PropType, ref} from "vue";
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

<style lang="scss" scoped>
.home-top {
  .home-top-images {
    clip-path: polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%);

    &:before {
      content: '';
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      position: absolute;
      background: linear-gradient(295deg, rgba(173, 0, 0, 0) 70%, rgba(0, 0, 0, .8) 100%);
      @media screen and (min-width: 768px) {
        background: linear-gradient(64deg, rgba(173, 0, 0, 0) 60%, rgba(0, 0, 0, .8) 100%);
      }
    }
  }
}

</style>