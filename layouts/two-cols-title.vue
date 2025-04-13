<!--
  Usage:
```md
---
layout: two-cols-header
---
This spans both
::left::
# Left
This shows on the left
::right::
# Right
This shows on the right
::bottom::
This shows at the bottom, aligned to the end (bottom) of the grid
```
-->

<script setup lang="ts">
const props = defineProps({
  class: {
    type: String,
  },
  layoutClass: {
    type: String,
  },
})
</script>

<template>
  <div class="slidev-layout two-cols-header w-full h-full" :class="props.layoutClass">
    <div>
      <slot />
    </div>
    <div class="grid grid-cols-2 gap-4">
        <div :class="props.class">
        <slot name="left" />
        </div>
        <div :class="props.class">
        <slot name="right" />
        </div>
    </div>
  </div>
</template>
