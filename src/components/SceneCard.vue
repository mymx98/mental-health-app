<template>
  <button class='SceneCard button--no-style'
          @click='select'
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
    item: {
      type: Object
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    cardStyles() {
      return {
        backgroundImage: `url('${this.item.imgSrc}'`
      };
    }
  },
  methods: {
    select() {
      this.$emit("select", this.item, this.$el);
    }
  }
};
</script>

<style lang='scss' scoped>
@import "@/styles/variables.scss";

$aspect-ratio: 1.8;
$width: 75px;

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

    @media only screen and (min-width: 768px) {
      width: 200px;
      height: $aspect-ratio * 200px;
    }
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
