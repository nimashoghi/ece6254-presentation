<template>
  <img
    :src="`https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&format=${format}&data=${encodeURIComponent(data)}`"
    :alt="alt || data"
    :class="className"
    :style="style"
  />
</template>

<script setup>
const props = defineProps({
  /**
   * The data to encode in the QR code
   */
  data: {
    type: String,
    required: true
  },
  /**
   * Size of the QR code in pixels
   */
  size: {
    type: [Number, String],
    default: 125
  },
  /**
   * Format of the QR code image
   */
  format: {
    type: String,
    default: 'svg'
  },
  /**
   * Alt text for the QR code image
   */
  alt: {
    type: String,
    default: ''
  },
  /**
   * Custom CSS class to apply to the image
   */
  className: {
    type: String,
    default: ''
  },
  /**
   * Custom inline styles to apply to the image
   */
  style: {
    type: Object,
    default: () => ({})
  }
})
</script>
