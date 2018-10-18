<template>
  <div class='Breathe'>
    <div class='Breathe__header'>
      <button class='Breathe__icon-wrapper button--no-style'
              type='button'>
        <ChevronLeft class='Breathe__back-icon' />
      </button>
      <div class='Breathe__timer'>
        {{ formattedTimeElapsed }}
      </div>
      <button class='Breathe__icon-wrapper button--no-style'
              type='button'>
        <Settings class='Breathe__settings-icon' />
      </button>
    </div>
    <div class='Breathe__guide-container'>
      <div class='Breathe__guide-inner'>
        <BreathingGuide :playingState='playingState' />
        <button class='Breathe__controls button--no-style'
                type='button'
                @click='togglePlayingState'>
          <Pause v-if='playingState === "playing"'
                 class='Breathe__player-icon' />
          <Play v-else
                class='Breathe__player-icon Breathe__play-icon' />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ChevronLeft from "@/assets/icons/ChevronLeft.svg";
import Settings from "@/assets/icons/Settings.svg";
import Pause from "@/assets/icons/Pause.svg";
import Play from "@/assets/icons/Play.svg";
import BreathingGuide from "@/components/BreathingGuide";

export default {
  name: "Breathe",
  components: {
    ChevronLeft,
    Settings,
    Play,
    Pause,
    BreathingGuide
  },
  props: {
    timeUpdateInterval: {
      type: Number,
      default: 1000
    }
  },
  data() {
    return {
      startTime: new Date().getTime(),
      totalTimePaused: 0,
      timeAtLastPause: new Date().getTime(),
      timeElapsed: 0,
      playingState: "playing"
    };
  },
  computed: {
    effectiveTimeElapsed() {
      // const now = new Date().getTime();

      // return now - this.startTime - this.timeElapsedAtLastPause;
      return this.timeElapsed - this.totalTimePaused;
    },
    formattedTimeElapsed() {
      // return Math.round(this.timeElapsed / 1000);
      return Math.round(this.effectiveTimeElapsed / 1000);
    }
  },
  methods: {
    togglePlayingState() {
      if (this.playingState === "playing") {
        this.playingState = "paused";
        this.pauseTimer();
      } else {
        this.playingState = "playing";
        this.startTimer();
      }
    },
    updateTimeElapsed() {
      const now = new Date().getTime();
      console.log(
        "updateTimeElapsed",
        now,
        this.startTime,
        this.lastPauseTime,
        (now - this.startTime) / 1000,
        this.timeElapsedAtLastPause / 1000
      );
      this.timeElapsed = now - this.startTime;
    },
    pauseTimer() {
      this.timeAtLastPause = new Date().getTime();
      if (this.timer) {
        clearInterval(this.timer);
      }
      this.timer = null;
    },
    startTimer() {
      if (!this.timer) {
        this.timer = setInterval(
          this.updateTimeElapsed,
          this.timeUpdateInterval
        );
        this.updateTimeElapsed();
        this.totalTimePaused += new Date().getTime() - this.timeAtLastPause;
      }
    },
    stop() {
      clearInterval(this.timer);
      this.timer = null;
    }
  },
  created() {
    this.startTimer();
  },
  beforeDestroy() {
    clearInterval(this.timer);
    this.timer = null;
  }
};
</script>

<style lang='scss' scoped>
@import "@/styles/variables.scss";

.Breathe {
  position: relative;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px;
  }

  &__guide-container {
    width: 100%;
    height: calc(100vh - 80px);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__guide-inner {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  &__controls {
    margin-top: 120px;
    text-align: center;
    z-index: 10000;
    border: 1px solid $color-white;
    border-radius: 100%;
    width: 72px;
    height: 72px;
    display: flex;
    justify-content: center;
    align-items: center;

    // TODO: this is shared with media player styles
    transition: $swift-ease-out;
    transition-property: stroke, transform;

    &:hover {
      transform: scale(1.1);

      svg {
        stroke: darken($color-white, 10%);
      }
    }
  }

  &__player-icon {
    width: 48px;
    height: 48px;
    stroke: $color-white;
  }

  &__icon-wrapper {
    width: 56px;
    // TODO: this is shared with media player styles
    transition: $swift-ease-out;
    transition-property: stroke, transform;

    &:hover {
      transform: scale(1.1);

      svg {
        stroke: darken($color-white, 10%);
      }
    }
  }

  &__back-icon {
    width: 48px;
    height: 48px;
    fill: $color-white;
  }

  &__play-icon {
    margin-left: 8px;
  }

  &__settings-icon {
    width: 40px;
    height: 40px;
    padding: 6px;
    stroke: $color-white;
  }

  &__timer {
    font-size: 1.6em;
  }
}
</style>
