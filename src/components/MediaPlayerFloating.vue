<template>
  <portal to="media-player-floating">
    <TransitionSlideFromBottom>
      <div v-if='visible'
           class='MediaPlayerFloating'>
        <MediaPlayer class='MediaPlayer'
                     :media='media'
                     autoplay
                     @close='$emit("close")' />
      </div>
    </TransitionSlideFromBottom>
  </portal>
</template>

<script>
import TransitionSlideFromBottom from "@/components/Shared/TransitionSlideFromBottom";
import MediaPlayer from "@/components/MediaPlayer";

export default {
  name: "MediaPlayerFloating",
  components: {
    MediaPlayer,
    TransitionSlideFromBottom
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    media: {
      type: Object
    }
  }
};
</script>

<style lang='scss' scoped>
@import "@/styles/variables.scss";

.MediaPlayerFloating {
  width: 100%;
  height: 100%;
  border: 3px solid white;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 24px;
}
</style>
