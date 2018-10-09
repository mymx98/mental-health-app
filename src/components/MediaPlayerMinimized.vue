<template>
  <portal to="media-player-minimized">
    <TransitionSlideFromTop>
      <div v-if='visible'
           tabindex="-1"
           @click='$emit("maximize")'
           class='MediaPlayerMinimized'>
        Minimized Player
        <!-- <div class='MediaPlayerMinimized__content'>
          Minimized Player
        </div> -->
        <!-- <MediaPlayer class='MediaPlayer'
                     :media='media'
                     autoplay
                     @close='$emit("close")' /> -->
      </div>
    </TransitionSlideFromTop>
  </portal>
</template>

<script>
import TransitionSlideFromTop from "@/components/Shared/TransitionSlideFromTop";
import MediaPlayer from "@/components/MediaPlayer";

export default {
  name: "MediaPlayerMinimized",
  components: {
    MediaPlayer,
    TransitionSlideFromTop
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

$media-player-minimized-padding: 24px;

.MediaPlayerMinimized {
  // width: calc(100%;
  // width: calc(100% - $media-player-minimized-padding);
  // width: calc(100% - 24px);
  width: calc(100% - #{$media-player-minimized-padding * 2});
  left: $media-player-minimized-padding;
  border-radius: 99999px;
  border: 1px solid #f1f1f1;
  box-sizing: border-box;
  position: fixed;
  bottom: 100px;
  background-color: rgba(41, 41, 41, 0.7);
  padding: 24px;
  cursor: pointer;

  &:focus {
    outline: 0;
    box-shadow: 0 0 10px rgb(77, 144, 254);
  }

  &__content {
  }
}
</style>
