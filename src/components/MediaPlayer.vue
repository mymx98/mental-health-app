<template>
  <div class='MediaPlayer'>
    <FocusLock returnFocus
               class='lock-container'
               lockContainerClass='lock-container-inner'>
      <button type='button'
              class='MediaPlayer__minimize button--no-style'
              @click='$emit("minimize")'>
        <ChevronDown />
      </button>
      <div class='MediaPlayer__content'>
        <div class='MediaPlayer__media-info'>
          <slot />
        </div>
        <div class='MediaPlayer__controls'>
          <div class='MediaPlayer__controls-primary-container'>
            <div class='MediaPlayer__controls-primary'>
              <button type='button'
                      class='player-button button--no-style'
                      @click='$emit("settings")'>
                <Sliders class='player-icon settings-icon' />
              </button>
              <button type='button'
                      class='player-button button--no-style'
                      @click='$emit("rewind")'>
                <Rotate class='player-icon' />
              </button>
              <button v-if='loading'
                      type='button'
                      class='player-button button--no-style'>
                <Loading class='player-icon player-loading-icon' />
              </button>
              <button v-else-if='playerStatus === "playing"'
                      type='button'
                      class='player-button button--no-style'
                      @click='$emit("pause")'>
                <Pause class='player-icon player-pause-icon' />
              </button>
              <button v-else
                      type='button'
                      class='player-button button--no-style'
                      @click='$emit("play")'>
                <Play class='player-icon player-play-icon' />
              </button>
              <button type='button'
                      class='player-button button--no-style'
                      id="next-btn"
                      @click='$emit("forward")'>
                <Rotate class='player-icon player-icon-forward' />
              </button>
              <button type='button'
                      class='player-button button--no-style'
                      id="player-Square-button"
                      @click='$emit("stop")'>
                <Square class='player-icon' />
              </button>
            </div>
          </div>
          <div id="timeline"
               class='MediaPlayer__timeline'>
            <div class='MediaPlayer__timestamp-wrapper'>
              <span id="current-time"
                    class='MediaPlayer__timestamp'>{{ currentTimeFormatted }}</span>
              <span id="total-time"
                    class='MediaPlayer__timestamp'>{{ mediaDurationFormatted }}</span>
            </div>
            <div class="slider-container"
                 @click='sliderClicked'>
              <div class="slider">
                <div class="progress"
                     :style='progressStyles'>
                  <div class="pin"
                       id="progress-pin"
                       data-method="rewind"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="sub-controls">
            <i class="fa fa-random"
               aria-hidden="true"></i>
            <i class="fa fa-refresh"
               aria-hidden="true"></i>
            <i class="fa fa-bluetooth-b active"
               id="bluetooth-btn"
               aria-hidden="true"></i>
            <i class="fa fa-heart-o"
               id="heart-icon"
               aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </FocusLock>
  </div>
</template>

<script>
import FocusLock from "@/components/Shared/FocusLock";
import Rotate from "@/assets/icons/Rotate.svg";
import Play from "@/assets/icons/Play.svg";
import Pause from "@/assets/icons/Pause.svg";
import Square from "@/assets/icons/Square.svg";
import ChevronDown from "@/assets/icons/ChevronDown.svg";
import Sliders from "@/assets/icons/Sliders.svg";
import Loading from "@/assets/icons/Loading.svg";
import { formattedTimeStamp } from "@/services/TimestampFormatting";

export default {
  name: "MediaPlayer",
  components: {
    FocusLock,
    Rotate,
    Play,
    Pause,
    Square,
    ChevronDown,
    Sliders,
    Loading
  },
  props: {
    media: {
      type: Object,
      required: true
    },
    seekInterval: {
      type: Number,
      default: 5
    },
    autoplay: {
      type: Boolean,
      default: false
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
    progressStyles() {
      return {
        width: `${this.playerProgress}%`
      };
    },
    playerProgress() {
      if (this.currentTime && this.duration) {
        return this.currentTime * (100 / this.duration);
      } else {
        return 0;
      }
    },
    currentTimeFormatted() {
      return formattedTimeStamp(this.currentTime);
    },
    mediaDurationFormatted() {
      return formattedTimeStamp(this.duration);
    }
  },
  methods: {
    close() {
      this.$emit("close");
    },
    sliderClicked(e) {
      const sliderFactor = e.offsetX / e.target.clientWidth;

      this.$emit("seek", this.duration * sliderFactor);
    }
  }
};
</script>

<style lang='scss'>
.lock-container,
.lock-container-inner {
  height: 100%;
}
</style>
<style lang='scss' scoped>
@import "@/styles/variables.scss";

.MediaPlayer {
  height: 100%;
  position: relative;

  &__minimize {
    position: absolute;
    top: 0;
    left: 0;
    width: auto;
    height: auto;

    svg {
      stroke: $color-white;
      height: 48px;
      width: 48px;
    }
  }

  &__content {
    // Flex container
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  &__media-info {
    flex: 1 0 auto; /* 2 */
    height: 200px;
    overflow-y: auto;
  }

  &__controls {
    text-align: center;
    // margin-top: auto;
    flex: none; /* 2 */
  }

  &__controls-primary-container {
    display: flex;
    justify-content: center;
  }

  &__controls-primary {
    display: flex;
    // align-items: center;
    justify-content: space-between;
    margin: 24px 0;
    max-width: 375px;
    width: 100%;
  }

  &__series {
    text-align: center;
    font-size: 2em;
    margin-bottom: 96px;
  }

  &__title {
    text-align: center;
    font-size: 1.6em;
    margin-bottom: 24px;
  }

  &__subtitle {
    text-align: center;
    font-size: 1.2em;
  }

  &__timeline {
    // width: 95%;
    padding: 0 24px;
  }

  &__timestamp-wrapper {
    display: flex;
    justify-content: space-between;
  }

  &__timestamp {
    font-size: 1.4em;
  }

  $iphone-color: white;
  $primary-color: #3acfd5;

  // #timeline {
  //   position: relative;
  //   margin: 0 auto;
  //   width: 92.5%;

  //   span {
  //     color: darken(white, 30%);
  //     font-size: 7px;
  //     position: absolute;
  //     top: -10px;

  //     &#current-time {
  //       left: 0;
  //     }
  //     &#total-time {
  //       right: 0;
  //     }
  //   }
  // }

  .slider-container {
    padding: 24px 0;
    cursor: pointer;
  }

  $slider-height: 2px;

  .slider {
    background-color: darken(white, 50%);
    border-radius: 2px;
    cursor: pointer;
    height: $slider-height;
    position: relative;
    width: 100%;

    .progress {
      background-color: $primary-color;
      height: 100%;
      pointer-events: none;
      position: absolute;
      width: 0;

      $pin-size: 16px;

      .pin {
        background-color: white;
        border-radius: 100%;
        width: $pin-size;
        height: $pin-size;
        position: absolute;
        pointer-events: all;
        right: -$pin-size/2;
        top: -$pin-size/2 + $slider-height/2;
        // @include box-shadow(0px 1px 1px 0px rgba(0, 0, 0, 0.32));
        // @include transition(transform 0.25s ease);

        &:active {
          // @include transform(scale(1.5));
        }
      }
    }
  }

  .player-icon {
    stroke: $color-white;
    width: 36px;
    height: 36px;
  }

  .player-loading-icon {
    padding: 1px 7px 2px 7px;
    width: 62px;
    height: 70px;
  }

  .player-play-icon,
  .player-pause-icon {
    width: 72px;
    height: 72px;
  }

  .player-icon-forward {
    transform: scale(-1, 1);
  }

  .settings-icon {
    fill: $color-white;
    // padding: 12px;
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
