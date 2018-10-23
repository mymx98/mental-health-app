<template>
  <button class='SceneCard button--no-style'
          :class='{"SceneCard--selected": selected}'
          type='button'>
    <Card class='SceneCard__card'
          :style='cardStyles'
          raised
          zoomable
          translucent>
      <div class='SceneCard__mask'></div>
      <div class='SceneCard__content'>
        <div class='SceneCard__title'>
          <slot name='title' />
        </div>
      </div>
    </Card>
  </button>
</template>

<script>
import Card from "@/components/Shared/Card";

export default {
  name: "SceneCard",
  components: {
    Card
  },
  props: {
    imgSrc: {
      type: String,
      default: ""
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  computed: {
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

$aspect-ratio: 1.8;
$width: 150px;

.SceneCard {
  width: inherit;
  display: inline-block;

  &--selected {
    .SceneCard__card {
      border: 1px solid $color-white;
    }
  }

  &__card {
    padding: 16px;
    display: flex;
    align-items: center;
    position: relative;
    background-size: cover;
    background-position: center;
    width: $width;
    height: $aspect-ratio * $width;
  }

  &__mask {
    background-color: $body-background-color;
    position: absolute;
    border-radius: 10px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.3;
    z-index: -1;
  }

  &__content {
    position: absolute;
    bottom: 24px;
    left: 0;
    width: 100%;
  }

  // &__title {
  //   font-weight: bold;
  // }
}
</style>
