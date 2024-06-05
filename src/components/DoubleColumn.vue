<template>
  <div v-editable="blok"></div>
</template>

<script lang="ts">

import {PropType} from "vue";
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
  }
}
</script>