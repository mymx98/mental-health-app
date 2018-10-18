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
    <!-- <ChevronLeft class='Breathe__back-icon' />
    <div class='Breathe__time-elapsed'>
      {{ formattedTimeElapsed }}
    </div>
    <button type='button'
            @click='start'>
      Start
    </button>
    <button type='button'
            @click='stop'>
      Stop
    </button> -->
    <div class='Breathe__guide-container'>
      <BreathingGuide />
    </div>
  </div>
</template>

<script>
import ChevronLeft from "@/assets/icons/ChevronLeft.svg";
import Settings from "@/assets/icons/Settings.svg";
import BreathingGuide from "@/components/BreathingGuide";

export default {
  name: "Breathe",
  components: {
    ChevronLeft,
    Settings,
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
      timeElapsed: 0
    };
  },
  computed: {
    formattedTimeElapsed() {
      return Math.round(this.timeElapsed / 1000);
    }
  },
  methods: {
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
