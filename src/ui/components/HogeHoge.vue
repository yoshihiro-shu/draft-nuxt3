<template>
  <article class="flex flex-col shadow my-4">
    props: {{ text }}
  </article>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    text: string | undefined
  }>(),
  {
    text: 'default'
  }
)
</script>
