<script setup lang="ts" generic="T">
import './BaseFilters.css'
import BaseButton from '../BaseButton/BaseButton.vue'
import type {BaseFiltersProperties} from "../../interfaces/base-filters-properties.interface.ts";
import {useBaseFilters} from "../../composables/useBaseFilters.ts";

const model = defineModel<T>({ required: true })

defineProps<BaseFiltersProperties<T>>()

const { isSelected, select } = useBaseFilters(model)
</script>

<template>
  <nav class="base-filters">
    <BaseButton
        v-for="option in options"
        :key="String(option.value)"
        variant="secondary"
        :disabled="false"
        :is-done="false"
        type="button"
        class="filter-item"
        :class="{ 'filter-item--active': isSelected(option.value) }"
        @click="select(option.value)"
    >
      {{ option.label }}
    </BaseButton>
  </nav>
</template>