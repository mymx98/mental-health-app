<template>
  <div class='MediaPlayer'>
    <FocusLock returnFocus
               class='lock-container'
               lockContainerClass='lock-container-inner'>
      <button type='button'
              class='MediaPlayer__close button--no-style'
              @click='close'>
        <ChevronDown />
      </button>
      <div class='MediaPlayer__content'>
        <div class='MediaPlayer__track-info'>
          <div class='MediaPlayer__series'>
            Daily Calm
          </div>
          <div class='MediaPlayer__title'>
            Non-Attachment
          </div>
          <div class='MediaPlayer__subtitle'>
            Daily Calm
          </div>
        </div>
        <!-- <slot /> -->
        <div class='MediaPlayer__controls'>
          <div class='MediaPlayer__controls-primary-container'>
            <div class='MediaPlayer__controls-primary'>
              <button type='button'
                      class='player-button'
                      id="previous-btn"
                      @click='settings'>
                <Sliders class='player-icon settings-icon' />
              </button>
              <button type='button'
                      class='player-button'
                      id="previous-btn"
                      @click='rewind'>
                <Rotate class='player-icon' />
              </button>
              <button type='button'
                      class='player-button'
                      id="play-btn"
                      ref='playPauseButton'
                      @click='togglePlayerStatus'>
                <Pause v-if='playerStatus === "playing"'
                       class='player-icon player-pause-icon' />
                <Play v-else
                      class='player-icon player-play-icon' />
              </button>
              <button type='button'
                      class='player-button'
                      id="next-btn"
                      @click='forward'>
                <Rotate class='player-icon player-icon-forward' />
              </button>
              <button type='button'
                      class='player-button'
                      id="player-Square-button"
                      @click='stop'>
                <Square class='player-icon' />
              </button>
            </div>
          </div>
          <div id="timeline">
            <span id="current-time">--:--</span>
            <span id="total-time">--:--</span>
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
// import FocusLock from "vue-focus-lock";
import FocusLock from "@/components/Shared/FocusLock";
import Rotate from "@/assets/icons/Rotate.svg";
import Play from "@/assets/icons/Play.svg";
import Pause from "@/assets/icons/Pause.svg";
import Square from "@/assets/icons/Square.svg";
import ChevronDown from "@/assets/icons/ChevronDown.svg";
import Sliders from "@/assets/icons/Sliders.svg";

export default {
  name: "MediaPlayer",
  components: {
    FocusLock,
    Rotate,
    Play,
    Pause,
    Square,
    ChevronDown,
    Sliders
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
    }
  },
  data() {
    return {
      playerProgress: 0,
      playerStatus: "paused" // 'playing', 'paused', 'stopped'
    };
  },
  computed: {
    progressStyles() {
      // return {
      // border: "1px solid red"
      // };
      console.log(this.playerProgress);
      return {
        width: `${this.playerProgress}%`
      };
    }
  },
  methods: {
    close() {
      this.$emit("close");
    },
    settings() {},
    sliderClicked(e) {
      // console.log("sliderClicked", e, e.x, e.offsetX, e.clientX, e.screenX);
      console.log(
        "sliderClicked",
        e.offsetX,
        e.target.clientWidth,
        (e.offsetX / e.target.clientWidth) * 100
      );

      const sliderFactor = e.offsetX / e.target.clientWidth;
      this.player.currentTime = this.player.duration * sliderFactor;
    },
    togglePlayerStatus() {
      if (this.playerStatus === "playing") {
        this.playerStatus = "paused";
        this.pause();
      } else {
        this.playerStatus = "playing";
        this.play();
      }
    },
    async play() {
      try {
        await this.player.play();
        this.playerStatus = "playing";
      } catch (e) {
        this.playerStatus = "paused";
      }
    },
    pause() {
      this.player.pause();
      this.playerStatus = "paused";
    },
    rewind() {
      let targetTime = this.player.currentTime - this.seekInterval;
      if (targetTime < 0) {
        targetTime = 0;
      }

      this.player.currentTime = targetTime;
    },
    forward() {
      let targetTime = this.player.currentTime + this.seekInterval;
      if (targetTime > this.player.duration) {
        targetTime = this.player.duration;
      }

      this.player.currentTime = targetTime;
    },
    stop() {
      this.close();
    },
    updateProgress() {
      // var current = player.currentTime;
      // var percent = (current / player.duration) * 100;
      // progress.style.width = percent + "%";
      // currentTime.textContent = formatTime(current);
    },
    // rewind(event) {
    //   if (inRange(event)) {
    //     player.currentTime = player.duration * getCoefficient(event);
    //   }
    // },
    seektimeupdate() {
      this.playerProgress =
        this.player.currentTime * (100 / this.player.duration);
      // var curmins = Math.floor(audio.currentTime / 60);
      // var cursecs = Math.floor(audio.currentTime - curmins * 60);
      // var durmins = Math.floor(audio.duration / 60);
      // var dursecs = Math.floor(audio.duration - durmins * 60);
      // if (cursecs < 10) {
      //   cursecs = "0" + cursecs;
      // }
      // if (dursecs < 10) {
      //   dursecs = "0" + dursecs;
      // }
      // if (curmins < 10) {
      //   curmins = "0" + curmins;
      // }
      // if (durmins < 10) {
      //   durmins = "0" + durmins;
      // }
      // curtimetext.innerHTML = curmins + ":" + cursecs;
      // durtimetext.innerHTML = durmins + ":" + dursecs;
    },
    destroyPlayer() {
      console.log("destroyPlayer", this.player);
      if (this.player) {
        this.player.pause();
        this.player.src = "";
        this.player.load();
        this.player.remove();
        this.player = null;
      }
    }
  },
  mounted() {
    // this.$refs.player.play();
    this.player = new Audio();
    this.player.src = this.media.mediaSrc;
    this.player.addEventListener("timeupdate", this.seektimeupdate);

    this.player.addEventListener("ended", () => {
      this.player.currentTime = 0;
      this.pause();
    });

    if (this.autoplay) {
      this.player.addEventListener("canplay", this.play, false);
    }
    // this.player.loop = true;
  },
  beforeDestroy() {
    this.destroyPlayer();
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

  &__close {
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
    height: 100%;
    display: flex;
    flex-direction: column;

    // .MediaPlayer__controls {
    //   flex-grow: 1;
    // }
  }

  // .MediaPlayer__controls {
  //   position: absolute;
  //   bottom: 0;
  //   left: 100px;
  // }

  &__track-info {
    margin: 96px 0;
  }

  &__controls {
    text-align: center;
    margin-top: auto;
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
    max-width: 480px;
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

  $iphone-color: white;
  $primary-color: #3acfd5;

  #timeline {
    position: relative;
    margin: 0 auto;
    width: 92.5%;

    span {
      color: darken(white, 30%);
      font-size: 7px;
      position: absolute;
      top: -10px;

      &#current-time {
        left: 0;
      }
      &#total-time {
        right: 0;
      }
    }
  }

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
    padding: 12px;
  }

  .player-button {
    background: none;
    border: none;
    line-height: 1;
    cursor: pointer;
    transition: $swift-ease-out;
    transition-property: stroke, transform;

    // svg {
    //   transition: $swift-ease-out;
    //   transition-property: stroke, transform;
    // }

    &:hover {
      transform: scale(1.1);

      svg {
        stroke: darken($color-white, 10%);
      }
    }
  }
}
</style>
