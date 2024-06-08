<template>
  <div v-if="global" class="footer flex flex-col items-center gap-36 mt-36">
    <div class="contact flex flex-col items-center gap-6">
      <h3 class="font-headline text-3xl">{{ global.contactHeading }}</h3>
      <p>{{ global.email }}</p>
      <a :href="`mailto:${global.email}`" class="bg-red font-white py-2 px-6">Contact me!</a>
    </div>
  </div>
</template>

<script lang="ts">
import {inject, Ref} from "vue";
import {Global} from "@/shared/global.model";

export default {
  name: "Contact",
  setup() {
    const global = inject('global') as Ref<Global | undefined>;
    return {
      global
    }
  }
}
</script>