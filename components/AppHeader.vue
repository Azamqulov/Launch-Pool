<script lang="ts" setup>
const nav = [
  {
    label: 'Что такое IDO?',
    to: '/#chto-takoe-ido',
  },
  {
    label: 'Как это работает',
    to: '/#kak-eto-rabotaet',
  },
  {
    label: 'Плюсы',
    to: '/#pochemu-sobirayutsya-puly',
  },
  {
    label: 'Команда',
    to: '/#nasha-komanda',
  },
  {
    label: 'Заявка на участие',
    to: 'https://t.me/artem_tudorin',
    featured: true,
  },
]

const mobileNav = nav.filter((item) => !item.featured)

const route = useRoute()
const isOpen = ref(false)

watch(
  () => route,
  () => (isOpen.value = false),
  { deep: true },
)
</script>

<template>
  <header class="py-6 sm:py-10">
    <USlideover v-model="isOpen">
      <div class="h-full py-10">
        <Container class="flex h-full flex-col gap-y-[60px]">
          <div class="flex items-center justify-between">
            <UButton
              class="focus-visible:ring-0"
              variant="link"
              :padded="false"
              to="/"
            >
              <Logo class="h-14 w-auto sm:h-auto" />
            </UButton>
            <UButton
              :ui="{ rounded: 'rounded-[10px]' }"
              variant="outline"
              icon="i-heroicons-x-mark"
              @click="isOpen = false"
            />
          </div>
          <div class="flex flex-col gap-y-5">
            <ULink
              v-for="item of mobileNav"
              :key="item.label"
              class="text-lg font-semibold transition-opacity hover:opacity-70"
              :to="item.to"
            >
              {{ item.label }}
            </ULink>
          </div>
          <LandingButton class="mt-auto w-full" :to="nav[4].to">
            {{ nav[4].label }}
          </LandingButton>
        </Container>
      </div>
    </USlideover>
    <Container class="flex items-center justify-between">
      <UButton
        class="focus-visible:ring-0"
        variant="link"
        :padded="false"
        to="/"
      >
        <Logo class="h-14 w-auto sm:h-auto" />
      </UButton>
      <div class="hidden gap-x-7 min-[1120px]:flex">
        <ULink
          v-for="item of nav"
          :key="item.label"
          :to="item.to"
          class="hover:border-primary mt-0.5 border-b-2 border-transparent transition hover:opacity-70"
          :class="{ 'font-bold xl:hidden': item.featured }"
        >
          {{ item.label }}
        </ULink>
      </div>
      <UButton
        class="xl:hidden"
        :ui="{ rounded: 'rounded-[10px]' }"
        icon="i-heroicons-bars-3"
        @click="isOpen = true"
      />
      <LandingButton
        class="hidden xl:inline-flex"
        block
        :to="nav[4].to"
        target="_blank"
      >
        {{ nav[4].label }}
      </LandingButton>
    </Container>
  </header>
</template>
