<template>
  <portal to="media-player-minimized">
    <TransitionSlideFromTop>
      <button v-if='visible'
              type='button'
              @click='$emit("maximize")'
              class='MediaPlayerMinimized '>
        <img :src='media.imgSrc'
             class='MediaPlayerMinimized__image' />
        <div>
          <div>
            {{ media.title }}
          </div>
          <div>
            {{ subtitle }}
          </div>
        </div>
        <div>
          {{ currentTimeFormatted }}
        </div>
        <div>
          <button v-if='playerStatus === "playing"'
                  type='button'
                  class='player-button button--no-style'
                  @click.stop='$emit("pause")'>
            <Pause class='player-icon player-pause-icon' />
          </button>
          <button v-else
                  type='button'
                  class='player-button button--no-style'
                  @click.stop='$emit("play")'>
            <Play class='player-icon player-play-icon' />
          </button>
        </div>
      </button>
    </TransitionSlideFromTop>
  </portal>
</template>

<script>
import TransitionSlideFromTop from "@/components/Shared/TransitionSlideFromTop";
import MediaPlayer from "@/components/MediaPlayer";
import Play from "@/assets/icons/Play.svg";
import Pause from "@/assets/icons/Pause.svg";
import { formattedTimeStamp } from "@/services/TimestampFormatting";

export default {
  name: "MediaPlayerMinimized",
  components: {
    MediaPlayer,
    TransitionSlideFromTop,
    Play,
    Pause
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    media: {
      type: Object
    },
    loading: {
      type: Boolean,
      default: false
    },
    currentTime: {
      type: Number,
      default: 0
    },
    duration: {
      type: Number,
      default: 0
    },
    playerStatus: {
      type: String,
      default: "paused" // 'playing', 'paused', 'stopped'
    }
  },
  computed: {
    subtitle() {
      if (this.media.type === "story") {
        return this.media.narrator;
      } else if (this.media.type === "meditation") {
        return this.media.series;
      } else if (this.media.type === "music") {
        return this.media.category;
      } else {
        return "";
      }
    },
    currentTimeFormatted() {
      return formattedTimeStamp(this.currentTime);
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
  background-color: rgba(41, 41, 41, 0.75);
  padding: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: $color-white;

  &:focus {
    outline: 0;
    box-shadow: 0 0 30px rgb(77, 144, 254);
  }

  &__image {
    width: 64px;
    height: 64px;
    border-radius: 100%;
  }
  &__content {
  }

  .player-icon {
    stroke: $color-white;
    width: 36px;
    height: 36px;
  }

  .player-button {
    transition: $swift-ease-out;
    transition-property: stroke, transform;

    &:hover {
      transform: scale(1.1);

      svg {
        stroke: darken($color-white, 10%);
      }
    }
  }
}
</style>
