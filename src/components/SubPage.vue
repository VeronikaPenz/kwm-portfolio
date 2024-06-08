<template>
  <div v-editable="blok" class="sub-page flex flex-col gap-12">
    <div class="back-button">
      <router-link to="/" class="bg-red font-white py-2 px-4">< Back</router-link>
    </div>
    <StoryblokComponent
      v-for="b in blok.body" :key="b._uid"
      :blok="b"
    />
  </div>
  <Contact></Contact>
</template>

<script lang="ts">
import {PropType} from "vue";
import {SbBlokData} from "@storyblok/vue";
import Contact from "@/components/partials/Contact.vue";

interface SubPage extends SbBlokData {
  body: SbBlokData[]
}

export default {
  name: "SubPage",
  components: {Contact},
  props: {
    blok: {
      type: Object as PropType<SubPage>,
      required: true
    }
  }
}
</script>
