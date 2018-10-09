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
          <div id="controls">
            <button type='button'
                    class='player-button'
                    id="previous-btn"
                    @click='rewind'>
              <Rotate class='player-icon' />
            </button>
            <button type='button'
                    class='player-button'
                    id="play-btn"
                    @click='togglePlayerStatus'>
              <Pause v-if='playerStatus === "playing"'
                     class='player-icon' />
              <Play v-else
                    class='player-icon' />
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
          <div id="timeline">
            <span id="current-time">--:--</span>
            <span id="total-time">--:--</span>
            <div class="slider"
                 data-direction="horizontal">
              <div class="progress"
                   :style='progressStyles'>
                <div class="pin"
                     id="progress-pin"
                     data-method="rewind"></div>
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

export default {
  name: "MediaPlayer",
  components: {
    FocusLock,
    Rotate,
    Play,
    Pause,
    Square,
    ChevronDown
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
    togglePlayerStatus() {
      if (this.playerStatus === "playing") {
        this.playerStatus = "paused";
        this.pause();
      } else {
        this.playerStatus = "playing";
        this.play();
      }
    },
    play() {
      this.player.play();
    },
    pause() {
      this.player.pause();
    },
    rewind() {},
    forward() {},
    stop() {
      this.close();
    },
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
    this.player.src =
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/Post%20Malone%20-%20rockstar%20ft.%2021%20Savage%20(1).mp3";
    this.player.addEventListener("timeupdate", this.seektimeupdate);
    // this.player.loop = true;
    // this.player.play();
  },
  beforeDestroy() {
    console.log("beforeDestroy");
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

  // &__track-info {
  // }

  &__controls {
    text-align: center;
    margin-top: auto;
  }

  &__series {
    text-align: center;
    font-size: 2em;
    margin: 48px 0;
  }

  &__title {
    text-align: center;
    font-size: 1.6em;
    margin-bottom: 24px;
  }

  &__subtitle {
    text-align: center;
    font-size: 1.2em;
    margin-bottom: 48px;
  }

  $iphone-color: white;
  $primary-color: #e74c3c;

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

  div.slider {
    background-color: darken(white, 50%);
    border-radius: 2px;
    cursor: pointer;
    height: 2px;
    position: relative;
    width: 100%;

    div.progress {
      background-color: $primary-color;
      height: 100%;
      pointer-events: none;
      position: absolute;
      width: 0;

      div.pin {
        background-color: white;
        border-radius: 8px;
        height: 8px;
        position: absolute;
        pointer-events: all;
        right: -5px;
        top: -3px;
        width: 8px;
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
