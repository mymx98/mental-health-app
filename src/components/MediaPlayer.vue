<template>
  <portal to="media-player">
    <TransitionSlideFromBottom>
      <div class='MediaPlayer'
           v-if='visible'>
        <h2>MediaPlayer</h2>
        <!-- <slot name='info' /> -->
        <slot />
        <button type='button'
                @click='close'>
          Close
        </button>
      </div>
    </TransitionSlideFromBottom>
  </portal>
</template>

<script>
import TransitionSlideFromBottom from "@/components/Shared/TransitionSlideFromBottom";

export default {
  name: "MediaPlayer",
  components: {
    TransitionSlideFromBottom
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
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
