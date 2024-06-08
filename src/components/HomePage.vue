<template>
  <transition name="fade-leave">
    <div v-editable="blok" class="home-page flex flex-col gap-24 md:gap-32">
      <StoryblokComponent
        v-for="b in blok.body" :key="b._uid"
        :blok="b"
      />
    </div>
  </transition>
  <Contact></Contact>
</template>

<script lang="ts">
import {PropType} from "vue";
import {SbBlokData} from "@storyblok/vue";
import Contact from "@/components/partials/Contact.vue";

interface HomePage extends SbBlokData {
  body: SbBlokData[]
}

export default {
  name: "HomePage",
  components: {Contact},
  props: {
    blok: {
      type: Object as PropType<HomePage>,
      required: true
    }
  }
}
</script>
