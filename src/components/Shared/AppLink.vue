<template>
  <router-link v-bind='$attrs'
               class='AppLink'>
    <div class='AppLink__mask'></div>
    <div class='AppLink__icon-wrapper'
         v-if='$slots.icon'>
      <slot name='icon' />
    </div>
    <div class='AppLink__label'>{{ label }}</div>
    <ChevronRight class='AppLink__chevron' />
  </router-link>
</template>

<script>
import ChevronRight from "@/assets/icons/ChevronRight.svg";

export default {
  name: "AppLink",
  components: {
    ChevronRight
  },
  props: {
    label: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang='scss'>
@import "@/styles/variables.scss";

$navigation-link-size: 42px;
$navigation-link-size-padding: 0.375 * $navigation-link-size;
$navigation-link-icon-size: $navigation-link-size -
  $navigation-link-size-padding;
$navigation-link-spacing: $navigation-link-size * 0.25;

.AppLink {
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 $navigation-link-spacing;
  text-align: center;
  text-decoration: none;
  color: $link-text-color--active;
  transition: $swift-ease-out;
  transition-property: color, background-color;
  z-index: 1;
  padding: 16px;

  &__icon-wrapper {
    border-radius: 100%;
    width: $navigation-link-size;
    height: $navigation-link-size;
    border: 2px solid #eda67a;
    transition: $swift-ease-out;
    transition-property: border;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 12px 0;
  }

  svg {
    width: $navigation-link-icon-size;
    height: $navigation-link-icon-size;
    stroke: $link-text-color--active;
    // fill: $color-white;
    transition: $swift-ease-out;
    transition-property: stroke;
  }

  &__label {
    font-size: 0.5 * $navigation-link-size;
    font-weight: 500;
  }

  &__mask {
    background-color: #333333;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: -1;
    transition: $swift-ease-out;
    transition-property: opacity;
  }

  &:hover {
    .AppLink__mask {
      opacity: 0.4;
    }
  }

  &__chevron {
    stroke: none;
    fill: $color-grey;
    margin-left: auto;
  }
}
</style>
