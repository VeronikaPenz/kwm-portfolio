<template>
  <router-link v-editable="blok" :to="'/'+blok.link.cached_url" class="project-teaser">
    <span class="project-teaser-title">{{ blok.title }}</span>
    <!--<span class="project-teaser-subtitle">{{ blok.subtitle }}</span>-->
    <img :src="blok.image.filename" :alt="blok.image.alt" class="project-teaser-image">
  </router-link>
</template>

<script lang="ts">
import {Asset} from "@/shared/asset.model";
import {PropType} from "vue";
import {Link} from "@/shared/link.model";
import {SbBlokData} from "@storyblok/vue";

interface ProjectTeaser extends SbBlokData {
  title: string
  subtitle?: string
  image: Asset
  link: Link
}

export default {
  name: "ProjectTeaser",
  props: {
    blok: {
      type: Object as PropType<ProjectTeaser>,
      required: true
    }
  }
}
</script>