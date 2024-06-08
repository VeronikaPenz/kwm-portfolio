<template>
    <div v-editable="blok" class="text-block relative" v-html="renderRichText(blok.text)"></div>
</template>

<script lang="ts">
import {PropType} from "vue";
import {renderRichText, Richtext, SbBlokData} from "@storyblok/vue";

interface TextBlock extends SbBlokData {
  text: Richtext
}

export default {
  name: "TextBlock",
  props: {
    blok: {
      type: Object as PropType<TextBlock>,
      required: true
    }
  },
  setup(){
    return {
      renderRichText
    }
  }
}
</script>

<style lang="scss" scoped>
.text-block:after {
  content: '';
  position: absolute;
  right: 1em;
  top: 100%;
  width: 5em;
  height: 3px;
  background: #f00;
}
</style>