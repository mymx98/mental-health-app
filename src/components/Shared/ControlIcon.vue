<template>
  <div class='ControlIcon'
       :class='classes'>
    <slot />
  </div>
</template>

<script>
export default {
  name: "ControlIcon",
  props: {
    background: {
      type: String,
      default: "none"
    },
    link: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return {
        "ControlIcon--link": this.link
      };
    },
    styles() {
      return {
        // background: this.background
      };
    }
  }
};
</script>

<style lang='scss'>
@import "@/styles/variables.scss";

$control-icon-size: 32px;

.ControlIcon {
  // background-image: linear-gradient(to top, #3acfd5 0%, #3a4ed5 100%);
  border: 2px solid #3a4ed5;
  transition: $swift-ease-out;
  transition-property: border;

  &:hover {
    border: 2px solid #3acfd5;
  }

  border-radius: 100%;
  width: $control-icon-size;
  height: $control-icon-size;
  padding: 12px;

  svg {
    width: $control-icon-size;
    height: $control-icon-size;
  }
}
</style>


<style lang='scss' scoped>
.ControlIcon {
}
</style>
