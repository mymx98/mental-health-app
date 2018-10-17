<template>
  <div class='Breathe'>
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
    <BreathingGuide />
  </div>
</template>

<script>
import ChevronLeft from "@/assets/icons/ChevronLeft.svg";
import BreathingGuide from "@/components/BreathingGuide";

export default {
  name: "Breathe",
  components: {
    ChevronLeft,
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
  &__back-icon {
    fill: $color-white;
  }
}
</style>
