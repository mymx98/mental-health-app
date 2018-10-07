<script>
export default {
  props: {
    raised: {
      type: Boolean,
      default: true
    },
    hoverable: {
      type: Boolean,
      default: false
    },
    shiftable: {
      type: Boolean,
      default: false
    },
    zoomable: {
      type: Boolean,
      default: false
    },
    translucent: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return {
        "Card--raised": this.raised,
        "Card--hoverable": this.hoverable,
        "Card--shiftable": this.shiftable,
        "Card--zoomable": this.zoomable,
        "Card--translucent": this.translucent
      };
    }
  }
};
</script>

<template>
  <div class='Card'
       :class='classes'>
    <slot></slot>
  </div>
</template>

<style lang='scss' scoped>
@import "@/styles/variables.scss";

$card-radius: 10px;
$card-shiftable-offset: 6px;

.Card {
  display: block;
  overflow: visible;
  border-radius: $card-radius;
  background-color: #fff;
  transition: $swift-ease-out;
  margin-top: 0;
  border: 1px solid $color-grey-lighter;
  transition-property: all;
  // color: #000000;

  &--hoverable {
    cursor: pointer;

    &:hover {
      box-shadow: $shadow-5dp;
    }
  }

  &--raised {
    border: none;
    box-shadow: $shadow-subtle;
  }

  &--shiftable {
    &:hover {
      transform: translateY(-$card-shiftable-offset);
    }
  }

  &--translucent {
    opacity: 0.9;
  }

  &--zoomable {
    &:hover {
      transform: scale(1.02);
    }
  }
}
</style>
