<template>
  <div v-editable="blok" class="text-block">
    <TextParser :text="blok.text"></TextParser>
  </div>
</template>

<script lang="ts">
import {PropType} from "vue";
import {RichText} from "@/shared/rich-text.model";
import TextParser from "@/components/partials/TextParser.vue";
import {SbBlokData} from "@storyblok/vue";

interface TextBlock extends SbBlokData {
  text: RichText
}

export default {
  name: "TextBlock",
  components: {TextParser},
  props: {
    blok: {
      type: Object as PropType<TextBlock>,
      required: true
    }
  }
}
</script>