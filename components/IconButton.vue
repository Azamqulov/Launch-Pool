<script lang="ts" setup>
defineProps<{
  to?: string
}>()
</script>

<template>
  <ULink
    class="bg-primary flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-[10px] transition-opacity hover:opacity-70"
    :to="to"
  >
    <slot />
  </ULink>
</template>
