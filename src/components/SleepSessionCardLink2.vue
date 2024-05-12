<template>
  <div>
  <button class='AudioCardLink__link button--no-style'>
    <Card class='SleepSessionCardLink2'
          :style='cardStyles'
          raised
          zoomable
          translucent>
      <div class='SleepSessionCardLink2__mask'></div>
      <div class='SleepSessionCardLink2__content'>
        <div class='SleepSessionCardLink2__title'>
          {{ title }}
        </div>
        <div class='SleepSessionCardLink2__subtitle'>
          {{ formattedDuration }}
        </div>
      </div>
    </Card>
  </button>
  <div class='SleepSessionCardLink2__duration'>
          <Like class='SleepSessionCardLink2__action-icon' />
        </div>
</div>
</template>

1<script>
import Card from "@/components/Shared/Card";
import Like from "@/assets/icons/Like.svg";
import Sun from "@/assets/icons/Sun.svg";

export default {
  name: "SleepSessionCardLink2",
  components: {
    Card,
    Like,
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

.SleepSessionCardLink2 {
  padding: 16px;
  display: flex;
  align-items: center;
  position: relative;
  background-size: cover;
  background-position: center;
  height: 60px;

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
    color: $color-grey;
    // color: $color-white;

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
    justify-content: left;
    align-items: left;
    flex-direction: column;
  }

  &__title {
    text-align: left;
    font-size: 1.6em;
    margin-top: 32px;
    margin-bottom: 24px;
  }

  &__subtitle {
    text-align: left;
    font-size: 0.8em;
    margin-bottom: 24px;
  }

  &__duration {
    display: flex;
    font-size: 0.8em;
    align-items: center;
  }

  &__action-icon {
    height: 32px;
    width: 32px;
    stroke: $color-grey;
    transition: $swift-ease-out;
    transition-property: stroke;
  }
}
</style>
