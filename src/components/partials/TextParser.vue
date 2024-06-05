<template>
  <template v-if="text.type === 'text' && text.text">{{ text.text }}</template>
  <template v-else-if="text.type === 'doc' && text.content">
    <TextParser v-for="(c, index) of text.content" :key="index" :text="c"></TextParser>
  </template>
  <p v-else-if="text.type === 'paragraph' && text.content">
    <TextParser v-for="(c, index) of text.content" :key="index" :text="c"></TextParser>
  </p>
</template>

<script lang="ts">
import {PropType} from "vue";
import {RichText} from "@/shared/rich-text.model";

export default {
  name: "TextParser",
  props: {
    text: {
      type: Object as PropType<RichText>,
      required: true
    }
  }
}
</script>