<template>
  <button type='button'
          class='FilterBadge'
          @click='$emit("click")'
          :class='classes'>
    <slot />
  </button>
</template>

<script>
export default {
  name: "FilterBadge",
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return {
        "FilterBadge--active": this.active
      };
    }
  }
};
</script>

<style lang='scss' scoped>
@import "@/styles/variables.scss";

.FilterBadge {
  display: inline-block;
  border-radius: 9999px;
  background-color: $body-background-color;
  padding: 6px 16px;
  cursor: pointer;
  color: $text-color;
  transition: $swift-ease-out;
  border: none;
  transition-property: color, transform;
  white-space: nowrap;
  margin: 3px;

  &:focus {
    outline: 0;
    box-shadow: 0 0 5px rgb(77, 144, 254);
  }

  &:hover {
    color: darken($text-color, 10%);
    transform: scale(1.05);
    // background-color: lighten($body-background-color, 5%);
  }

  &--active {
    background: #3acfd5; /* Old browsers */
    background: linear-gradient(155deg, #3acfd5 0%, #2989d8 50%, #3a4ed5 100%);
  }
}
</style>
