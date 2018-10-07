<template>
  <Transition name='media-player'>
    <div class='MediaPlayer'>
      <!-- <div class='MediaPlayer__drawer'> -->
      MediaPlayer
      <button type='button'
              @click='close'>
        Close
      </button>
      <!-- </div> -->
    </div>
  </Transition>
</template>

<script>
export default {
  name: "MediaPlayer",
  props: {
    imgSrc: {
      type: String,
      default: ""
    }
  },
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>

<style lang='scss'>
@import "@/styles/variables.scss";

.media-player-enter-active,
.media-player-leave-active {
  transition: $swift-slide;
  transition-property: opacity, transform;
  transform: translateY(0%);
}
.media-player-enter,
.media-player-leave-to {
  opacity: 0;
  transform: translateY(110%);
}
</style>

<style lang='scss' scoped>
@import "@/styles/variables.scss";

.MediaPlayer {
  width: 100%;
  height: 100%;
  border: 3px solid white;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  // background-color: rgba(8, 18, 33, 0.6);
  background-color: rgba(0, 0, 0, 0.5);
  // filter: blur(5px);
}
</style>
