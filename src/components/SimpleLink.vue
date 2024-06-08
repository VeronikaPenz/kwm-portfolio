<template>
    <div v-editable="blok" class="simple-link">
      <a :href="blok.link.url" target="_blank" class="text-red hover:underline">{{ blok.linkLabel ?? blok.link.url}}</a>
    </div>
</template>

<script lang="ts">
import {PropType} from "vue";
import {SbBlokData} from "@storyblok/vue";
import {Link} from "@/shared/link.model";

interface SimpleLink extends SbBlokData {
  link: Link
  linkLabel?: string
}

export default {
  name: "SimpleLink",
  props: {
    blok: {
      type: Object as PropType<SimpleLink>,
      required: true
    }
  }
}
</script>