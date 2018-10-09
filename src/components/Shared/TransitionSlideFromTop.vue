<template>
  <Transition name='slide-from-top'>
    <slot />
  </Transition>
</template>

<style lang='scss'>
@import "@/styles/variables.scss";

.slide-from-top-enter-active,
.slide-from-top-leave-active {
  transition: $swift-slide;
  transition-property: opacity, transform;
  transform: translateY(0%);
}
.slide-from-top-enter,
.slide-from-top-leave-to {
  opacity: 0;
  transform: translateY(-110%);
}
</style>
