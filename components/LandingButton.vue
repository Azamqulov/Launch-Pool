<script lang="ts" setup>
const props = defineProps<{
  to?: string
  variant?: 'solid' | 'outline'
}>()

const classes = computed(() =>
  [props.variant ?? 'solid'].map((c) => {
    if (c === 'outline') {
      return '_outline'
    }

    return c
  }),
)
</script>

<template>
  <ULink
    class="LandingButton border-primary inline-flex h-[60px] w-[280px] shrink-0 items-center justify-center rounded-[20px] border-2 px-5 text-center font-semibold transition-opacity hover:opacity-70"
    :class="classes"
    :to="to"
  >
    <slot />
  </ULink>
</template>

<style>
.LandingButton.solid {
  @apply bg-primary text-[#242424];
}

.LandingButton._outline {
  @apply text-primary;
}
</style>
