<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()

if (process.server) {
  console.log(runtimeConfig.hogehoge)
}

</script>

<template>
  <div>
    it is top page
  </div>
</template>
