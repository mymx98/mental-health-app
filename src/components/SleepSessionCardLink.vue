<template>
  <button class='AudioCardLink__link button--no-style'>
    <Card class='SleepSessionCardLink'
          :style='cardStyles'
          raised
          zoomable
          translucent>
      <div class='SleepSessionCardLink__mask'></div>
      <div class='SleepSessionCardLink__content'>
        <div class='SleepSessionCardLink__title'>
          {{ title }}
        </div>
        <div class='SleepSessionCardLink__subtitle'>
          {{ subtitle }}
        </div>
        <div class='SleepSessionCardLink__duration'>
          <Play class='SleepSessionCardLink__action-icon' />
          <span>{{ formattedDuration }}</span>
        </div>
      </div>
    </Card>
  </button>
</template>

1<script>
import Card from "@/components/Shared/Card";
import Play from "@/assets/icons/Play.svg";
import Sun from "@/assets/icons/Sun.svg";

export default {
  name: "SleepSessionCardLink",
  components: {
    Card,
    Play,
    Sun
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    subtitle: {
      type: String,
      default: ""
    },
    duration: {
      type: Number,
      default: 0
    },
    imgSrc: {
      type: String,
      default: ""
    }
  },
  computed: {
    formattedDuration() {
      return `${Math.round(this.duration / 60)} min`;
    },
    cardStyles() {
      return {
        backgroundImage: `url('${this.imgSrc}'`
      };
    }
  }
};
</script>

<style lang='scss' scoped>
@import "@/styles/variables.scss";

.SleepSessionCardLink {
  padding: 16px;
  display: flex;
  align-items: center;
  position: relative;
  background-size: cover;
  background-position: center;
  height: 200px;

  &__mask {
    background-color: $body-background-color;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.4;
    z-index: -1;
  }

  // &__image-wrapper {
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  // }

  // &__image {
  //   width: 400px;
  // }

  &__link {
    text-decoration: none;
    // color: $color-grey;
    color: $color-white;

    // &:hover {
    //   color: lighten($color-grey, 10%);

    //   .SleepSessionCardLink__category-icon {
    //     stroke: lighten($color-blue, 10%);
    //   }

    //   .SleepSessionCardLink__action-icon {
    //     stroke: lighten($color-grey, 10%);
    //   }
    // }
  }

  // &__category-icon {
  //   height: 48px;
  //   width: 48px;
  //   stroke: $color-blue;
  //   transition: $swift-ease-out;
  //   transition-property: stroke;
  // }

  &__action {
    margin-left: auto;
  }

  &__content {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  &__title {
    text-align: center;
    font-size: 1.6em;
    margin-top: 32px;
    margin-bottom: 24px;
  }

  &__subtitle {
    font-size: 0.8em;
    margin-bottom: 24px;
  }

  &__duration {
    display: flex;
    font-size: 0.8em;
    align-items: center;
  }

  &__action-icon {
    height: 16px;
    width: 16px;
    stroke: $color-white;
    transition: $swift-ease-out;
    transition-property: stroke;
  }
}
</style>
