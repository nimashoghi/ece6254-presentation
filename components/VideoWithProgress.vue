<template>
    <figure
        :class="[figureClass, sharedClass]"
        :style="[figureStyle, sharedStyle]"
    >
        <video
            ref="video"
            :autoplay="autoplay"
            :class="[videoClass, sharedClass]"
            :style="[videoStyle, sharedStyle]"
            @ended="onVideoEnded"
        >
            <slot />
        </video>
        <figcaption :class="figcaptionClass" :style="figcaptionStyle">
            <progress
                id="progress"
                max="100"
                :value="progress"
                :class="progressClass"
                :style="progressStyle"
            >
                Progress
            </progress>

            <small class="caption" v-if="caption">{{ caption }}</small>
        </figcaption>
    </figure>
</template>

<script>
export default {
    props: {
        autoplay: {type: Boolean, default: true},
        loop: {type: Boolean, default: false},
        maxLoops: {type: Number, default: null},
        loopRestartTimeout: {type: Number, default: 0},
        figureClass: {type: String, default: ""},
        figureStyle: {type: Object, default: () => ({})},
        videoClass: {type: String, default: ""},
        videoStyle: {type: Object, default: () => ({})},
        figcaptionClass: {type: String, default: ""},
        figcaptionStyle: {type: Object, default: () => ({})},
        progressClass: {type: String, default: ""},
        progressStyle: {type: Object, default: () => ({})},
        sharedClass: {type: String, default: ""},
        sharedStyle: {type: Object, default: () => ({})},
        caption: {type: String, default: ""},
    },
    data() {
        return {
            isPlaying: false,
            currentTime: 0,
            progress: 0,
            loopCount: 0,
        }
    },
    mounted() {
        this.$refs.video.addEventListener("timeupdate", this.updateProgress)
    },
    methods: {
        updateProgress() {
            this.currentTime = Math.round(this.$refs.video.currentTime)
            this.progress = Math.round(
                (this.$refs.video.currentTime / this.$refs.video.duration) *
                    100,
            )
        },
        onVideoEnded() {
            if (
                this.loop &&
                (this.maxLoops === null || this.loopCount < this.maxLoops)
            ) {
                setTimeout(() => {
                    this.$refs.video.currentTime = 0
                    this.$refs.video.play()
                    this.loopCount++
                }, this.loopRestartTimeout)
            }
        },
    },
}
</script>

<style scoped>
figcaption {
    align-items: center;
    background: #eaeaea;
    display: flex;
    flex-direction: column;
    padding: 0.2rem;
}

.caption {
    font-size: 0.6rem;
    text-align: center;
}

/* Fallback stuff */
progress[value] {
    appearance: none;
    border: none;
    border-radius: 3px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.25) inset;
    color: dodgerblue;
    display: inline;
    height: 0.5rem;
    order: 1;
    position: relative;
    width: 100%;
}

/* WebKit styles */
progress[value]::-webkit-progress-bar {
    background-color: whiteSmoke;
    border-radius: 3px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.25) inset;
}

progress[value]::-webkit-progress-value {
    background-image: linear-gradient(to right, #0084ff, #e52e71);
    border-radius: 3px;
    position: relative;
    transition: width 0.25s linear;
}

/* Firefox styles */
progress[value]::-moz-progress-bar {
    background-image: -moz-linear-gradient(to right, #0084ff, #e52e71);
    border-radius: 3px;
    position: relative;
    transition: width 1s linear;
}
</style>
