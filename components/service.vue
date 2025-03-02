<script setup>
defineProps({
  service: {
    type: Object,
    required: true,
  },
});

const { t } = useI18n();
</script>

<template>
  <div class="flex flex-col h-full ">
    <div class="flex justify-between items-start mb-4">
      <div class="p-2 rounded-lg bg-primary/10 flex-shrink-0">
        <i :class="service.icon" class="text-[2.25rem] text-primary"></i>
      </div>
      <div class="text-right flex-shrink-0">
        <div class="text-primary font-semibold text-lg font-inter">{{ service.price }}</div>
        <div class="text-neutral-500 text-sm font-inter">{{ service.duration }} {{ $t('services.minutes') }}</div>
      </div>
    </div>
    <h3 class="mb-2 text-lg font-medium font-playfair line-clamp-2">{{ service.name }}</h3>
    <p class="text-neutral-600 mb-4 font-inter line-clamp-3 grow">{{ service.description }}</p>
    <nuxt-link to="#contact" class="inline-flex items-center text-primary hover:underline text-sm font-medium font-inter mt-auto">
      {{ $t('services.book_now') }}
    </nuxt-link>
  </div>
</template>