<template>
  <TransitionSlideFromBottom>
    <div class='MediaPlayer'>
      MediaPlayer
      <button type='button'
              @click='close'>
        Close
      </button>
    </div>
  </TransitionSlideFromBottom>
</template>

<script>
import TransitionSlideFromBottom from "@/components/Shared/TransitionSlideFromBottom";

export default {
  name: "MediaPlayer",
  components: {
    TransitionSlideFromBottom
  },
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

<style lang='scss' scoped>
@import "@/styles/variables.scss";

.MediaPlayer {
  width: 100%;
  height: 100%;
  border: 3px solid white;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
