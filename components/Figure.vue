<template>
    <figure class="flex flex-col justify-center align-center">
        <slot />
        <figcaption
            v-if="caption || courtesy"
            class="text-xs text-gray-500 flex justify-center"
        >
            <div v-if="caption">{{ caption }}</div>
            <a v-if="courtesy" :href="courtesyUrl">{{ courtesy }}</a>
        </figcaption>
    </figure>
</template>

<script>
export default {
    props: {
        src: {
            type: String,
            required: true,
        },
        class: {
            type: String,
            default: "",
        },
        alt: {
            type: String,
            default: "",
        },
        caption: {
            type: String,
            default: "",
        },
        courtesy: {
            type: String,
            default: "",
        },
        courtesyUrl: {
            type: String,
            default: "",
        },
    },
}
</script>
