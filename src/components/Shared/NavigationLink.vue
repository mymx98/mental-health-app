<template>
  <router-link v-bind='$attrs'
               class='NavigationLink'>
    <div class='NavigationLink__icon-wrapper'
         v-if='$slots.icon'>
      <slot name='icon' />
    </div>
    <div class='NavigationLink__label'>{{ label }}</div>
  </router-link>
</template>

<script>
export default {
  name: "NavigationLink",
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

.NavigationLink {
  display: inline-block;
  margin: 0 $navigation-link-spacing;
  text-align: center;
  text-decoration: none;
  color: $link-text-color;
  transition: $swift-ease-out;
  transition-property: color, background-color;

  &__icon-wrapper {
    border-radius: 100%;
    width: $navigation-link-size;
    height: $navigation-link-size;
    border: 2px solid $color-violet;
    transition: $swift-ease-out;
    transition-property: border;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    color: $link-text-color--hover;

    .NavigationLink__icon-wrapper {
      border: 2px solid $color-aqua;
    }

    svg {
      stroke: $link-text-color--hover;
    }
  }

  &.router-link-active {
    color: $link-text-color--active;

    svg {
      stroke: $link-text-color--active;
    }

    .NavigationLink__icon-wrapper {
      border: 2px solid $color-aqua;
    }
  }

  svg {
    width: $navigation-link-icon-size;
    height: $navigation-link-icon-size;
    stroke: $link-text-color;
    transition: $swift-ease-out;
    transition-property: stroke;
  }

  &__label {
    margin-top: $navigation-link-size * 0.2;
    font-size: 0.25 * $navigation-link-size;
  }
}
</style>
