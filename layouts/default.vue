<template>
  <div>
    <slot />
  </div>
</template>
<script setup>
import { ref } from "vue";
const route = useRoute();
const current = ref("/");

onMounted(() => {
  current.value = route.fullPath;
});
</script>

<style>
.Demo_Comp {
  position: fixed;
  top: -2em;
  width: 95vw;
  z-index: 999999;
}
@media (min-width: 60em) {
  .Demo_Comp {
    position: fixed;
    top: 4em;
    width: 90vw;
    z-index: 999999;
  }
}
</style>
