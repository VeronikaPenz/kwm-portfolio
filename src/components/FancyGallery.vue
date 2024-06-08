<template>
  <div v-editable="blok" v-if="loaded" class="home-top-images relative flex flex-col gap-8">
    <template v-for="(image, index) of blok.items" :key="image.id">
      <transition name="slide-right">
        <img v-if="fadeInOffset[index]" :src="image.filename" :alt="image.alt"
             :class="[`gallery-img-${index}`, {'absolute right-4 top-[30%] w-[80%] shadow-2xl':index === 2},
         {'w-[90%] ml-2':index === 1}]">
      </transition>
    </template>
  </div>
</template>

<script lang="ts">
import {Asset} from "@/shared/asset.model";
import {onMounted, PropType, ref} from "vue";
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
  },
  setup(props: any) {
    const loaded = ref(false);
    const fadeInOffset = ref<{ [key: number]: boolean }>({});

    const setOffset = (index: number) => {
      setTimeout(() => fadeInOffset.value[index] = true, index * 200);
    }

    onMounted(() => {
      loaded.value = true;
      for (let i = 0; i < props.blok.items.length; i++) {
        const img = new Image();
        img.src = props.blok.items[i].filename;
        setOffset(i);
      }
    });


    return {
      loaded,
      fadeInOffset
    }
  }
}
</script>