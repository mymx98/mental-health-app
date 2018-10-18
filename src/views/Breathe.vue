<template>
  <div class='Breathe'>
    <div class='Breathe__header'>
      <div class='Breathe__icon-wrapper'>
        <ChevronLeft class='Breathe__back-icon' />
      </div>
      <div class='Breathe__timer'>
        0:07
      </div>
      <div class='Breathe__icon-wrapper'>
        <Settings class='Breathe__settings-icon' />
      </div>
    </div>
    <div class='Breathe__guide-container'>
      <div class='Breathe__guide-inner'>
        <BreathingGuide :playingState='playingState' />
        <div class='Breathe__controls'>
          <Pause class='Breathe__player-icon'
                 @click.native='togglePlayingState' />
        </div>
      </div>
    </div>
    <!-- <div class='Breathe__controls'>
      <Pause class='Breathe__settings-icon'
             @click.native='togglePlayingState' />
    </div> -->
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
    interval: {
      type: Number,
      default: 1000
    }
  },
  data() {
    return {
      timeElapsed: 0,
      playingState: "playing"
    };
  },
  computed: {
    formattedTimeElapsed() {
      return Math.round(this.timeElapsed / 1000);
    }
  },
  methods: {
    togglePlayingState() {
      console.log("togglePlayingState");
      if (this.playingState === "playing") {
        this.playingState = "paused";
      } else {
        this.playingState = "playing";
      }
    },
    increment() {
      this.timeElapsed += this.interval;
    },
    start() {
      if (!this.timer) {
        this.timer = setInterval(this.increment, this.interval);
      }
    },
    stop() {
      clearInterval(this.timer);
      this.timer = null;
    }
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
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
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
    margin-top: 100px;
    text-align: center;
    z-index: 10000;
    border: 1px solid $color-white;
    border-radius: 100%;
    width: 72px;
    height: 72px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__player-icon {
    width: 48px;
    height: 48px;
    stroke: $color-white;
  }

  &__icon-wrapper {
    width: 56px;
  }

  &__back-icon {
    width: 48px;
    height: 48px;
    fill: $color-white;
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
