<template>
  <transition name="fade">
    <footer v-if="global && loaded" class="footer flex items-center justify-center h-48 bg-darker">
      <span class="copyright">{{ global.copyright }}</span>
    </footer>
  </transition>
</template>

<script lang="ts">
import {inject, onMounted, ref, Ref} from "vue";
import {Global} from "@/shared/global.model";

export default {
  name: "Footer",
  setup() {
    const global = inject('global') as Ref<Global | undefined>;
    const loaded = ref(false);

    onMounted(() => {
      setTimeout(() => loaded.value = true, 1000);
    });

    return {
      loaded,
      global
    }
  }
}
</script>