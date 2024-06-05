<template>
  <router-link v-editable="blok" :to="'/'+blok.link.cached_url"
               class="project-teaser group relative flex flex-col gap-2 items-center">
    <div class="project-teaser-image block w-28 md:w-32 h-28 md:h-32">
      <img :src="blok.image.filename" :alt="blok.image.alt"
           class="project-teaser-image group-hover:scale-110 grayscale group-hover:grayscale-0">
    </div>
    <span class="project-teaser-title opacity-0 translate-y-[-1em]">{{ blok.title }}</span>
    <!--<span class="project-teaser-subtitle">{{ blok.subtitle }}</span>-->
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

<style lang="scss" scoped>

.project-teaser {
  .project-teaser-image, img, .project-teaser-title {
    transition: all 0.5s ease;
  }

  .project-teaser-image {
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    transition: all 0.5s ease;
  }

  &:hover {
    .project-teaser-title {
      opacity: 1;
      transform: translateY(0);
    }
    .project-teaser-image {
      clip-path: polygon(0 100%, 0 0, 100% 0, 100% 100%);
    }
  }
}
</style>