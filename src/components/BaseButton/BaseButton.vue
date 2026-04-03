<script setup lang="ts">
import './BaseButton.css'
import type {BaseButtonProperties} from "../../interfaces/base-button-properties.ts";

defineProps<BaseButtonProperties>()
</script>

<template>
  <button
      :type="type"
      :disabled="disabled"
      class="btn"
      :class="[`btn--${variant}`, { 'btn--done': isDone }]"
  >
    <slot />
  </button>
</template>